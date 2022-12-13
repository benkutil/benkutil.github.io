const xmlFiltersPlugin = require('eleventy-xml-plugin')

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(xmlFiltersPlugin);
    // Directory changes
    return {
        dir: {
            input: 'src',
            includes: '_includes',
            data: '_data'
        }
    }
};