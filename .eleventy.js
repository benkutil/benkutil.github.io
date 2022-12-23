const pluginRss = require("@11ty/eleventy-plugin-rss");
const htmlmin = require("html-minifier");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(pluginRss);
    
    // Directory changes
    return {
        dir: {
            input: 'src',
            includes: '_includes',
            data: '_data'
        }
    }
};