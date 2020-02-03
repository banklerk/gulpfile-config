module.exports = () => {
  $.gulp.task('grid', (fn) => {
    delete require.cache[require.resolve('./smartcfg.js')];
    let settings = require('./smartcfg.js')
    $.smartgrid('./assets/src/less/', settings);
    fn();
  });  
}