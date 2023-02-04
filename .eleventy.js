require('dotenv').config();
const Webmentions = require("eleventy-plugin-webmentions");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const Image = require("@11ty/eleventy-img");
const htmlmin = require("html-minifier");
const outdent = require("outdent");

/** Maps a config of attribute-value pairs to an HTML string
 * representing those same attribute-value pairs.
 */
const stringifyAttributes = (attributeMap) => {
    return Object.entries(attributeMap)
        .map(([attribute, value]) => {
            if (typeof value === 'undefined') return '';
            return `${attribute}="${value}"`;
        })
        .join(' ');
};

// shortcode for using 11ty's Image plugin
// from https://www.aleksandrhovhannisyan.com/blog/eleventy-image-plugin/
const imageShortcode = async (
    src,
    alt,
    className = undefined,
    widths = [400, 800, 1280],
    formats = ['webp', 'jpeg'],
    sizes = '100vw'
) => {
    const imageMetadata = await Image(src, {
        widths: [...widths, null],
        formats: [...formats, null],
        outputDir: '_site/media/images',
        urlPath: '/media/images',
    });
    const sourceHtmlString = Object.values(imageMetadata)
        // Map each format to the source HTML markup
        .map((images) => {
            // The first entry is representative of all the others
            // since they each have the same shape
            const { sourceType } = images[0];

            // Use our util from earlier to make our lives easier
            const sourceAttributes = stringifyAttributes({
                type: sourceType,
                // srcset needs to be a comma-separated attribute
                srcset: images.map((image) => image.srcset).join(', '),
                sizes,
            });

            // Return one <source> per format
            return `<source ${sourceAttributes}>`;
        })
        .join('\n');

    const getLargestImage = (format) => {
        const images = imageMetadata[format];
        return images[images.length - 1];
    }

    const largestUnoptimizedImg = getLargestImage(formats[0]);
    const imgAttributes = stringifyAttributes({
        src: largestUnoptimizedImg.url,
        width: largestUnoptimizedImg.width,
        height: largestUnoptimizedImg.height,
        alt,
        loading: 'lazy',
        decoding: 'async',
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
    eleventyConfig.addPlugin(Webmentions, {
        domain: "benkutil.com",
        token: process.env.WEBMENTIONS_TOKEN
    });

    // 11ty shortcodes
    eleventyConfig.addShortcode('image', imageShortcode);

    // run these configs in production only
    if (process.env.ELEVENTY_ENV === 'production') {
        eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
            // find html files
            if (outputPath && outputPath.endsWith(".html")) {
                // configure html-minify
                let minified = htmlmin.minify(content, {
                    useShortDoctype: true,
                    removeComments: true,
                    minifyCSS: true,
                    collapseWhitespace: true
                });
                return minified;
            }

            return content;
        });

    }

    // Directory changes
    return {
        dir: {
            input: 'src',
            includes: '_includes',
            data: '_data'
        }
    }
};