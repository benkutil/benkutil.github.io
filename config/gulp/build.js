module.exports = ( gulp, $, config ) => {
  gulp.task( 'build', ( done ) => {
    $.runSequence( 'jekyll-prod', 'copy-prod', 'html', 'uncss', 'rev' );
  } );
}
