module.exports = ( gulp, $, config, browserSync, reload, cp ) => {
  gulp.task( 'serve', [ 'jekyll-build' ], () => {
    browserSync( {
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
