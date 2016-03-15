module.exports = (gulp, $, config) => {
    gulp.task('html', () => {
        const uncssConfig = {
            html: [ 'tmp/**/*.html' ]
        }
        const htmlminConfig = {
            collapseWhitespace: true
        };

        return gulp.src('tmp/**/*.html')
            .pipe($.useref({
                searchPath: ['tmp', 'source', './']
            }))
            .pipe($.if('*.js', $.uglify()))
            .pipe( $.if( '*.css', $.uncss( uncssConfig ), $.cssnano() ) )
            .pipe( $.if( '*.html', $.htmlmin( htmlminConfig ) ) )
            .pipe(gulp.dest('dist'));
    });
}
