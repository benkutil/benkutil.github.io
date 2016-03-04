module.exports = ( gulp, $, config ) => {
  gulp.task( 'serve-revved', () => {
    $.browserSync( {
      notify: true,
      server: {
        baseDir: [
          'revved'
        ],
        // routes: {
        //   '/media': 'shared/media',
        // }
      }
    } );
  } );
}
