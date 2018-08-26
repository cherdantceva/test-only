var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    vars = require('../variables');

gulp.task('data:build', function () {
    gulp.src(vars.src.data)
        .pipe(gulp.dest(vars.build.data))
});