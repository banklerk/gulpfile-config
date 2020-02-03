module.exports = () => {
  $.gulp.task('img:dev', () => {
    return $.gulp.src(['assets/src/img/**/*.@(png|jpg|svg)', '!assets/src/img/sprite/*.png', '!assets/src/img/inline-icons/*.svg'])
      .pipe($.gulp.dest('assets/build/img/'));
  });

  $.gulp.task('img:build', (fn) => {
    return $.gulp.src(['assets/src/img/**/*.@(png|jpg)', '!assets/src/img/sprite/*.png', '!assets/src/img/inline-icons/*.svg', '!assets/src/img/favicon/*.@(png|ico|svg)'])
      .pipe($.gp.tinypng('yw3kpc9DfNpPNmHlW0cC7BtcmXjbKJfL'))
      .pipe($.gulp.dest('assets/build/img/'));
    fn();
  });

  $.gulp.task('sprite', (fn) => {
    let spriteData =
      $.gulp.src('assets/src/img/sprite/*.png')
        .pipe($.gp.spritesmith({
          imgName: 'sprite-icons.png',
          cssName: 'sprite-icons.css',
          algorithm: 'left-right',
          cssTemplate: 'assets/src/sprites.handlebars'
        }));
    spriteData.img.pipe($.gulp.dest('assets/build/img'));
    // spriteData.css.pipe($.gulp.dest('assets/build/css'));
    fn();
  });

  $.gulp.task('svg', () => {
    return $.gulp.src('assets/src/img/inline-icons/*.svg')
      .pipe($.gp.svgmin({
        js2svg: {
          pretty: true
        }
      }))
      .pipe($.gp.cheerio({
        run: ($) => {
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },
        parserOptions: { xmlMode: true }
      }))
      .pipe($.gp.replace('&gt;', '>'))
      .pipe($.gp.svgSprite({
        mode: {
          stack: { dest: '.' },
        }
      }))
      .pipe($.gulp.dest('assets/build/img/'));
  });
};