module.exports = () => {
  $.gulp.task('clean', () => {
    return $.del(['./assets/build/**/*.*', 
    '!./assets/build/README.md', 
    '!./assets/build/.gitignore'], {
      read: false
    });
  });
}

