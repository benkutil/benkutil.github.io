module.exports = ( gulp, $, config ) => {
  gulp.task( 'copy-prod', () => {

    return gulp.src([
      'tmp/**/*.*',
      '!tmp/**/*.html',
    ], {
      dot: true
    }).pipe(gulp.dest('dist'));

  } );
}
