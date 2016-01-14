module.exports = ( gulp, $, config, browserSync, reload, cp ) => {
  gulp.task( 'serve-dist', () => {
    browserSync( {
      notify: true,
      server: {
        baseDir: [
          'dist'
        ],
        routes: {
          '/media': 'shared/media',
        }
      }
    } );
  } );
}
