// Borrows from https://github.com/swmcc/swmcc.github.io/blob/master/test/site_test.js


var fs = require('fs');
var yaml = require('js-yaml');
var assert = require('chai').assert
var posts = fs.readdirSync("source/_portfolio/");
var path = require("path");

posts.forEach(function(post) {
  describe(post, function() {
    var ext = post.split('.');
    var data = read_post(post);

    it('posts have .md extension', function(){
      assert.equal(ext[ext.length - 1], 'md');
    });

    var metadata = data.metadata;
    it('posts have required YAML', function(){
      assert.equal(typeof metadata, 'object');
      var meta_keys = ['title','published', 'slug', 'year', 'thumbnail'];
      for (var key in meta_keys) {
        assert.ok(meta_keys[key] in metadata, 'exists')
      }
    });

    // it('posts have correct date format', function(){
    //   if (metadata.date) {
    //     assert.ok(metadata.date instanceof Date, 'Invalid Date format');
    //   }
    // });

    // it('ensure that the header and list graphics exist', function(){
    //   var large_filepath = path.resolve(__dirname) + "/.." + metadata['image-large'];
    //   var small_filepath = path.resolve(__dirname) + "/.." + metadata['image-small'];
    //   assert.isTrue(path_exists.sync(large_filepath));
    //   assert.isTrue(path_exists.sync(small_filepath));
    // });

  });
});


function read_post(filename) {
  var buffer = fs.readFileSync("source/_portfolio/" + filename), file = buffer.toString('utf8');

  try {
    var parts = file.split('---'), frontmatter = parts[1];

    it(filename, function() {
      assert.doesNotThrow(function() { yaml.load(frontmatter); });
    });

    return {
      name: filename,
      file: file,
      metadata: yaml.load(frontmatter),
      content: parts[2]
    };
  } catch(err) {}
}
