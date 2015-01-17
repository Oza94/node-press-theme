
var gulp = require('gulp'),
  stylus = require('gulp-stylus'),
  nib    = require('nib');

gulp.task('default', function () {
  return gulp.src('./src/index.styl')
    .pipe(stylus({
      use: nib(),
      compress: true
    }))
    .pipe(gulp.dest('./'));
});
