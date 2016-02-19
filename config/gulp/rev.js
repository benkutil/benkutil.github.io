module.exports = (gulp, $, config) => {
    gulp.task('rev', () => {
        var revAll = new $.revAll({
            dontRenameFile: [
                /^\/favicon.ico$/g,
                '.html',
                /^\/feed.xml$/g
            ],
            hashlength: 4
        });
        gulp.src('dist/**')
            .pipe(revAll.revision())
            .pipe(gulp.dest('dist'));
    });
}
