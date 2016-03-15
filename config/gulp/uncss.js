module.exports = (gulp, $, config) => {
    gulp.task('uncss', () => {
        const uncssConfig = {
            html: [ 'dist/**/*.html' ]
        }

        const cssSortingConfig = {
            'sort-order': 'zen'
        };

        const processors = [
            $.cssSort( cssSortingConfig )
        ];

        return gulp.src('dist/css/*.css')
            .pipe( $.uncss( uncssConfig ) )
            .pipe( $.postcss( processors ) )
            .pipe( $.cssnano() )
            .pipe( gulp.dest( 'dist/css' ) )
    });
}
