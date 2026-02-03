require("dotenv").config();
const Webmentions = require("eleventy-plugin-webmentions");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const Image = require("@11ty/eleventy-img");
const htmlmin = require("html-minifier-terser");
const outdent = require("outdent");
const pluginNavigation = require("@11ty/eleventy-navigation");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItAttrs = require("markdown-it-attrs");
const pluginTOC = require("eleventy-plugin-toc");
const pluginFilters = require("./_config/filters.js");
const pluginShortCodes = require("./_config/shortcode.js");
const processCSS = require("./_build/process-css.js");
const { fingerprintAssets } = require("./_build/fingerprint-assets.js");

/** Maps a config of attribute-value pairs to an HTML string
 * representing those same attribute-value pairs.
 */
const stringifyAttributes = (attributeMap) => {
  return Object.entries(attributeMap)
    .map(([attribute, value]) => {
      if (typeof value === "undefined") return "";
      return `${attribute}="${value}"`;
    })
    .join(" ");
};

// shortcode for using 11ty's Image plugin
// from https://www.aleksandrhovhannisyan.com/blog/eleventy-image-plugin/
const imageShortcode = async (
  src,
  alt,
  className = undefined,
  widths = [400, 800, 1280],
  formats = ["avif", "webp", "jpeg"],
  sizes = "100vw"
) => {
  const imageMetadata = await Image(src, {
    widths: [...widths, null],
    formats: [...formats, null],
    outputDir: "_site/media/images",
    urlPath: "/media/images",
    sharpAvifOptions: {
      quality: 80,
      effort: 4,
    },
    sharpWebpOptions: {
      quality: 85,
    },
    sharpJpegOptions: {
      quality: 85,
      progressive: true,
    },
  });

  const sourceHtmlString = Object.values(imageMetadata)
    .map((images) => {
      const { sourceType } = images[0];
      const sourceAttributes = stringifyAttributes({
        type: sourceType,
        srcset: images.map((image) => image.srcset).join(", "),
        sizes,
      });
      return `<source ${sourceAttributes}>`;
    })
    .join("\n");

  const getLargestImage = (format) => {
    const images = imageMetadata[format];
    return images[images.length - 1];
  };

  const largestUnoptimizedImg = getLargestImage(formats[0]);
  const imgAttributes = stringifyAttributes({
    src: largestUnoptimizedImg.url,
    width: largestUnoptimizedImg.width,
    height: largestUnoptimizedImg.height,
    alt,
    loading: "lazy",
    decoding: "async",
  });
  const imgHtmlString = `<img ${imgAttributes}>`;

  const pictureAttributes = stringifyAttributes({
    class: className,
  });
  const picture = `<picture ${pictureAttributes}>
    ${sourceHtmlString}
    ${imgHtmlString}
  </picture>`;

  return outdent`${picture}`;
};

module.exports = function (eleventyConfig) {
  // 11ty plugins
  eleventyConfig.addPlugin(pluginRss);

  // Only add Webmentions if token is provided (CI usually won't have it)
  const webmentionsToken = process.env.WEBMENTIONS_TOKEN;
  const hasWebmentionsToken =
    typeof webmentionsToken === "string" && webmentionsToken.trim().length > 0;

  if (hasWebmentionsToken) {
    eleventyConfig.addPlugin(Webmentions, {
      domain: "benkutil.com",
      token: webmentionsToken,
    });
  } else {
    eleventyConfig.addGlobalData("webmentions", []);
    eleventyConfig.addFilter("webmentionsForPage", () => []);
    eleventyConfig.addFilter("webmentionCountForPage", () => 0);
  }

  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(pluginSyntaxHighlight, {
    preAttributes: { tabindex: 0 },
  });
  eleventyConfig.addPlugin(pluginTOC, {
    tags: ["h2", "h3", "h4", "h5"],
    ul: true,
    flat: false,
    wrapper: "div",
  });

  // Add Tufte filters and shortcodes
  eleventyConfig.addPlugin(pluginFilters);
  eleventyConfig.addPlugin(pluginShortCodes);

  // 11ty shortcodes
  eleventyConfig.addShortcode("image", imageShortcode);

  // Configure markdown-it
  const markdownIt = require("markdown-it");
  let options = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
  };
  let markdownLib = markdownIt(options).use(markdownItAttrs);
  eleventyConfig.setLibrary("md", markdownLib);

  eleventyConfig.amendLibrary("md", (mdLib) => {
    mdLib.use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.ariaHidden({
        placement: "after",
        class: "header-anchor",
        symbol: "",
        ariaHidden: false,
      }),
      level: [1, 2, 3, 4],
      slugify: eleventyConfig.getFilter("slugify"),
    });
  });

  // Pass through fonts (CSS is processed separately)
  eleventyConfig.addPassthroughCopy("src/et-book");
  eleventyConfig.addPassthroughCopy("src/media/favicons");

  // Process CSS with PostCSS
  eleventyConfig.on("eleventy.before", async () => {
    await processCSS();
  });

  // run these configs in production only
  if (process.env.ELEVENTY_ENV === "production") {
    eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
      if (outputPath && outputPath.endsWith(".html")) {
        let minified = htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          minifyCSS: true,
          collapseWhitespace: true,
        });
        return minified;
      }

      return content;
    });

    // Fingerprint assets after build completes
    eleventyConfig.on("eleventy.after", async () => {
      await fingerprintAssets();
    });
  }

  // Directory changes
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
    },
  };
};
