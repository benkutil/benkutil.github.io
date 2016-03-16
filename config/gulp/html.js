module.exports = (gulp, $, config) => {
    gulp.task('html', () => {
        const htmlminConfig = {
            collapseWhitespace: true
        };

        return gulp.src(['tmp/**/*.html', '!tmp/media/**/*.html'])
            .pipe($.useref({
                searchPath: ['tmp', './']
            }))
            .pipe($.if('*.js', $.uglify()))
            .pipe( $.if( '*.html', $.htmlmin( htmlminConfig ) ) )
            .pipe(gulp.dest('dist'));
    });
}
