module.exports = ( gulp, $, config ) => {
  gulp.task('images', () => {
    return gulp.src('revved/media/**/*')
        .pipe($.imageoptim.optimize({
            jpegmini: true
        }))
        .pipe(gulp.dest('revved/media'))
  });
}
