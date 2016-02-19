module.exports = ( gulp, $, config ) => {
  gulp.task( 'copy-prod', () => {

    return gulp.src([
      'tmp/*.*',
      '!tmp/**/*.html',
      'shared/**'
    ], {
      dot: true
    }).pipe(gulp.dest('dist'));

  } );
}
