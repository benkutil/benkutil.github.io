module.exports = ( gulp, $, config ) => {
  gulp.task( 'build-styles', ( done ) => {
    $.runSequence( 'html', 'uncss', 'rev' );
  } );
}
