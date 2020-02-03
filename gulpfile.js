'use strict';

global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  webserver: require('browser-sync').create(),
  del: require('del'),
  smartgrid: require('smart-grid'),
  prefixer: require('autoprefixer'),
  pfm: require('postcss-font-magician'),
  mqpacker: require('css-mqpacker'),
  mqsorter: require('sort-css-media-queries'),
  print: require('gulp-print').default,

  path: {
    tasks: require('./gulp/config/tasks.js')
  }
};

$.path.tasks.forEach((taskPath) => {
  require(taskPath)();
});

$.gulp.task('serve', () => {
  $.webserver.init({
    server: './assets/build/',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
  $.webserver.watch('./assets/build/', $.webserver.reload);
});

$.gulp.task('default', $.gulp.series(
  $.gulp.parallel('clean'),
  $.gulp.parallel('html', 'script:lib', 'script', 'fonts', 'favicon', 'svg', 'sprite'),
  $.gulp.parallel('less'),
  $.gulp.parallel('img:dev'),
  $.gulp.parallel('watch', 'serve')
));

$.gulp.task('build', $.gulp.series(
  $.gulp.parallel('clean'),
  $.gulp.parallel('html', 'script:lib', 'script', 'fonts', 'favicon', 'svg', 'sprite'),
  $.gulp.parallel('less'),
  $.gulp.parallel('img:build'),
  /* $.gulp.parallel('deploy') */
));
