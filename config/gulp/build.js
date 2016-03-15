module.exports = ( gulp, $, config ) => {
  gulp.task( 'build', ( done ) => {
    $.runSequence( 'clean', 'jekyll-prod', 'copy-prod', 'html', 'uncss', 'rev' );
  } );
}
