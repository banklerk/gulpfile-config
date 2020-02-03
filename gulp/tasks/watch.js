module.exports = () => {
  $.gulp.task('watch', () => {
    $.gulp.watch('assets/src/**/*.html', $.gulp.parallel('html'));
    $.gulp.watch('./gulp/tasks/smartcfg.js', $.gulp.parallel('grid'));
    $.gulp.watch('assets/src/less/**/**/*.less', $.gulp.parallel('less')); 
    $.gulp.watch('assets/src/img/**/*.@(png|jpg)', $.gulp.parallel('img:dev'));
    $.gulp.watch('assets/src/img/inline-icons/*.svg', $.gulp.parallel('svg'));
    $.gulp.watch('assets/src/js/*.js', $.gulp.parallel('script')); 
  });
}