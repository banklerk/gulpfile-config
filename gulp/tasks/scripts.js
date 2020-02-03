module.exports = () => {
  $.gulp.task('script:lib', () => {
    return $.gulp.src(['node_modules/jquery/dist/jquery.min.js', 'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js', 'node_modules/slick-carousel/slick/slick.min.js'])
      .pipe($.gp.concat('libs.min.js'))
      .pipe($.gulp.dest('assets/build/js/'));
  });

  $.gulp.task('script', () => {
    return $.gulp.src('assets/src/js/main.js')
      .pipe($.gp.rigger())
      .pipe($.gp.minify({ext: {min: '.min.js'}}))
      .pipe($.gulp.dest('assets/build/js/'));
  });
}