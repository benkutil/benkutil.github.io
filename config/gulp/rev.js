module.exports = (gulp, $, config) => {
    gulp.task('rev', () => {
        var revAll = new $.revAll({
            dontRenameFile: [
                '.html',
                '.xml',
                /^\/manifest.json$/g,
                /^\/favicon.ico$/g,
            ],
            dontUpdateReference: [
                '.html',
                '.xml',
                /^\/manifest.json$/g,
                /^\/favicon.ico$/g,
            ],
            hashlength: 4
        });
        gulp.src('dist/**')
            .pipe(revAll.revision())
            .pipe(gulp.dest('revved'));
    });
}
