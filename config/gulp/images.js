module.exports = ( gulp, $, config ) => {
  gulp.task('images', () => {
    return gulp.src('tmp/media/**/*')
        .pipe($.imageoptim.optimize({
            jpegmini: true
        }))
        .pipe(gulp.dest('dist/media'))
  });
}
