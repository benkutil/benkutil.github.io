module.exports = ( gulp, $, config ) => {
  gulp.task('clean', $.del.bind(null, ['tmp/**/*.*', '!tmp', '!tmp/media/**', 'dist/*', '!dist/.git/**']));
}
