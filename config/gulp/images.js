module.exports = ( gulp, $, config ) => {
  gulp.task('images', () => {
    return gulp.src('dist/media/**/*')
        .pipe($.imageoptim.optimize({
            jpegmini: true
        }))
        .pipe(gulp.dest('shared/media'))
  });
}
