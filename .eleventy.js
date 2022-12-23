const pluginRss = require("@11ty/eleventy-plugin-rss");
const htmlmin = require("html-minifier");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(pluginRss);
    
    eleventyConfig.addTransform("htmlmin",  function(content,  outputPath) {
        // find html files
        if(outputPath && outputPath.endsWith(".html")) {
            // configure html-minify
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            });
            return minified;
        }
        
        return content;
    });

    // Directory changes
    return {
        dir: {
            input: 'src',
            includes: '_includes',
            data: '_data'
        }
    }
};