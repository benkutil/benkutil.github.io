module.exports = ( gulp, $, config ) => {
  gulp.task('clean', $.del.bind(null, ['tmp', 'dist']));
}
