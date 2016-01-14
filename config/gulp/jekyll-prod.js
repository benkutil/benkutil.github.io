module.exports = ( gulp, $, config ) => {
  gulp.task( 'jekyll-prod', ( done ) => {
    $.browserSync.notify('Building Jekyll');
    return  $.cp
      .spawn( 'jekyll',
        [ 'build',
          '--config',
          'config/jekyll/_config.yml,config/jekyll/_config-prod.yml',
          '--incremental'
        ],
        { stdio: 'inherit' }
      )
      .on( 'close', done );
  } );
}
