module.exports = ( gulp, $, config ) => {
  gulp.task( 'jekyll-build', ( done ) => {
    $.browserSync.notify('Building Jekyll');
    return  $.cp
      .spawn( 'jekyll',
        [ 'build',
          '--config',
          'config/jekyll/_config.yml'
        ],
        { stdio: 'inherit' }
      )
      .on( 'close', done );
  } );
}
