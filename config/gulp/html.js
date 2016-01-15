module.exports = ( gulp, $, config ) => {
  gulp.task( 'html', [ 'jekyll-prod' ], () => {
    return gulp.src('tmp/**/*.html')
      .pipe($.useref({searchPath: ['tmp', 'source', '.']}))
      .pipe($.if('*.js', $.uglify()))
      // .pipe($.if('*.css', $.cssnano()))
      .pipe($.if('*.html', $.htmlmin({collapseWhitespace: true})))
      .pipe(gulp.dest('dist'));
  } );
}
