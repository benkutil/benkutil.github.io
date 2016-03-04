module.exports = (gulp, $, config) => {
    gulp.task('rev', () => {
        var revAll = new $.revAll({
            dontRenameFile: [
                '.html',
                '.xml',
                /^\/media\/(.*)/g,
                /^\/manifest.json$/g,
                /^\/favicon.ico$/g,
            ],
            dontUpdateReference: [
                '.html',
                '.xml',
                /^\/media\/(.*)/g,
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
