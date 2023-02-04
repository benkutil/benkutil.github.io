const pluginRss = require("@11ty/eleventy-plugin-rss");
const htmlmin = require("html-minifier");

module.exports = function(eleventyConfig) {
    // 11ty plugins
    eleventyConfig.addPlugin(pluginRss);
    
    // run these configs in production only
    if (process.env.ELEVENTY_ENV === 'production' ) {
        eleventyConfig.addTransform("htmlmin",  function(content,  outputPath) {
            // find html files
            if(outputPath && outputPath.endsWith(".html")) {
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