module.exports = () => {
  // $.gulp.task("fonts", () => {
  //   return $.gulp.src('assets/src/fonts/**/*.*')
  //     .pipe($.gp.newer('assets/build/fonts/'))
  //     .pipe($.gulp.dest('assets/build/fonts/'));
  // });

  let options = {
    host: 'http://fontello.com',
    font: 'fonts',
    css: 'css/fontello',
    assetsOnly: true
  }

  $.gulp.task("fonts", () => {
    return $.gulp.src('config.json')
      .pipe($.gp.fontello(options))
      .pipe($.print())
      .pipe($.gulp.dest('assets/build/'))
  });
}