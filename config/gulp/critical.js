module.exports = ( gulp, $, config ) => {
  gulp.task( 'critical', (cb) => {
    // // Home
    // $.critical.generate({
    //   inline: true,
    //   base: 'dist/',
    //   src: 'index.html',
    //   dest: 'dist/index.html',
    //   minify: true,
    //   dimensions: [
    //     {
    //       width: 320,
    //       height: 480
    //     }, {
    //       width: 768,
    //       height: 1024
    //     }, {
    //       width: 1280,
    //       height: 960
    //     }
    //   ]
    // });

    // Home
    $.critical.generate({
      base: 'tmp/',
      src: 'index.html',
      dest: 'source/_includes/critical-default.css',
      minify: true,
      extract: false,
      dimensions: [
        {
          width: 320,
          height: 480
        }, {
          width: 768,
          height: 1024
        }, {
          width: 1280,
          height: 960
        }
      ]
    });
  } );
}
