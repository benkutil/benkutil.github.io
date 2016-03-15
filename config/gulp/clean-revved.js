module.exports = ( gulp, $, config ) => {
  gulp.task('clean-revved', $.del.bind(null, ['revved/*', '!revved/.git/**']));
}
