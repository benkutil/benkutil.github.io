module.exports = ( gulp, $, config ) => {
  gulp.task( 'watch', [ 'serve' ], () => {
    gulp.watch( [ 'source/**/*.{html,md,markdown}' ], [ 'jekyll-rebuild' ] );
  } );
}
