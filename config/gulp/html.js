module.exports = ( gulp, $, config, browserSync, reload, cp ) => {
  gulp.task( 'html', [ 'jekyll-build' ], () => {
    return gulp.src('tmp/**/*.html')
      .pipe($.useref({searchPath: ['tmp', 'source', '.']}))
      .pipe($.if('*.js', $.uglify()))
      .pipe($.if('*.css', $.cssnano()))
      .pipe($.if('*.html', $.htmlmin({collapseWhitespace: true})))
      .pipe(gulp.dest('dist'));
  } );
}
