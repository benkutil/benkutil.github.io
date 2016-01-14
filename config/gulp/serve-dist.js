module.exports = ( gulp, $, config ) => {
  gulp.task( 'serve-dist', () => {
    $.browserSync( {
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
