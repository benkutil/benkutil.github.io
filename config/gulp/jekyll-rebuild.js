module.exports = ( gulp, $, config ) => {
  gulp.task( 'jekyll-rebuild', ['jekyll-build'], () => {
    $.reload();
  } );
}
