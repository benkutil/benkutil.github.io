module.exports = ( gulp, $, config, browserSync, reload, cp ) => {
  gulp.task( 'jekyll-build', ( done ) => {
    browserSync.notify('Building Jekyll');
    return  cp
      .spawn( 'jekyll',
        [ 'build',
          '--config',
          'config/jekyll/_config.yml',
          'config/jekyll/_config-local.yml'
        ],
        { stdio: 'inherit' }
      )
      .on( 'close', done );
  } );
}
