var gulp = require('gulp'),
    babel = require('gulp-babel'),
    watch = require('gulp-watch');

gulp.task('babel', function () {
  return gulp.src('src/index.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.js', ['babel'])
});