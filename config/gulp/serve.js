module.exports = ( gulp, $, config ) => {
  gulp.task( 'serve', [ 'jekyll-build' ], () => {
    $.browserSync( {
      notify: true,
      port: 9000,
      server: {
        baseDir: [
          'tmp'
        ],
        routes: {
          '/media': 'shared/media',
          '/node_modules': 'node_modules'
        }
      }
    } );
  } );
}
