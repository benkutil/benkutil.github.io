module.exports = ( gulp, $, config ) => {
  gulp.task( 'build', ( done ) => {
    $.runSequence( 'clean', 'jekyll-prod', 'html', 'copy-prod', 'images', 'rev' );
  } );
}
