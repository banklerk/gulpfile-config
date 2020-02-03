module.exports = () => {
  $.gulp.task('html', () => {
    return $.gulp.src('assets/src/*.@(html|webmanifest)')
      .pipe($.gp.rigger())
      .pipe($.gulp.dest('assets/build/'));
  });
}