module.exports = ( gulp, $, config ) => {
  gulp.task( 'copy-prod', () => {

    gulp.src([
      'tmp/**/*.*',
      '!tmp/**/*.html',
    ], {
      dot: true
    }).pipe(gulp.dest('dist'));

    gulp.src([
        'source/media/favicons/*.*'
    ],{
      dot: true
    }).pipe( gulp.dest( 'dist' ) )

  } );
}
