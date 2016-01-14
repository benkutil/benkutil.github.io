module.exports = ( gulp, $, config, browserSync, reload, cp ) => {
  gulp.task( 'jekyll-rebuild', ['jekyll-build'], () => {
    reload();
  } );
}
