module.exports = () => {
  let browsers = [
    'Chrome >= 45',
    'Firefox ESR',
    'Edge >= 12',
    'Explorer >= 10',
    'iOS >= 9',
    'Safari >= 9',
    'Android >= 4.4',
    'Opera >= 30'
  ];

  let processors = [
    $.pfm({
      formats: 'woff2 woff',
      display: 'swap',
      variants: {
        'Playfair Display': {
          '400': [],
          '700': [],
        },
        'Roboto': {
          '100 normal': [],
          '300 normal': [],
          '400 normal': [],
          '900 normal': [],
        }
      },
      foundries: ['google']
    }),    
    $.prefixer({ overrideBrowserslist: browsers }),
    $.mqpacker({ sort: $.mqsorter.desktopFirst }),
  ]

  $.gulp.task('less', () => {
    return $.gulp.src('assets/src/less/main.less')
      .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError((err) => {
          return {
            title: 'style',
            message: err.message
          };
        })
      }))
      // .pipe($.gp.sourcemaps.init())
      .pipe($.gp.less())
      .pipe($.gp.postcss(processors))
      .pipe($.gulp.dest('assets/build/css/'))
      .pipe($.gp.csso({ sourceMap: true }))
      .pipe($.gp.rename({ suffix: ".min" }))
      // .pipe($.gp.sourcemaps.write('.'))
      .pipe($.gulp.dest('assets/build/css/'));
  });
}

