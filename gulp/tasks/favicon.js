module.exports = () => {
  $.gulp.task("favicon", () => {
    return $.gulp.src('assets/src/img/favicon/*.@(png|ico|svg)')
      .pipe($.gulp.dest('assets/build/img/favicon/'));
  });
}