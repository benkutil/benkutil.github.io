module.exports = ( gulp, $, config ) => {
  gulp.task('images', () => {
    return gulp.src('shared/media/**/*')
        .pipe($.imageoptim.optimize({
            jpegmini: true
        }))
        .pipe(gulp.dest('shared/media'))
  });
}
