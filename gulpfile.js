var gulp = require('gulp');
var stylus = require('gulp-stylus');
var koutoSwiss = require('kouto-swiss');
var plumber = require('gulp-plumber');

gulp.task('stylus', function() {
  gulp.src('./styles/*.styl')
    .pipe(plumber())
    .pipe(stylus({use: koutoSwiss(), import: 'kouto-swiss'}))
    .pipe(gulp.dest('./css'))
});

gulp.task('default', ['stylus'], function() {
  gulp.watch('./styles/*.styl', ['stylus']);
});