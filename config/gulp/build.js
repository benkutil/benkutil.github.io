module.exports = ( gulp, $, config ) => {
  gulp.task( 'build', ( done ) => {
    $.runSequence( 'clean', 'html', 'copy-prod' );
  } );
}
