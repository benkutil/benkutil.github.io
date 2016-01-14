module.exports = ( gulp, $, config, browserSync, reload, cp ) => {
  gulp.task( 'watch', [ 'serve' ], () => {
    gulp.watch( [ 'source/**/*.{html,md,markdown}' ], [ 'jekyll-rebuild' ] );
  } );
}
