module.exports = () => {
  $.gulp.task('deploy', () => {
    return $.gulp.src('./assets/build/**/*.*')
      .pipe($.gp.ghPages({
        remoteUrl: "git@github.com:banklerk/tajamtest.git",
        branch: "master",
      }));
  });
};

