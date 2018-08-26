var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    vars = require('../variables');

gulp.task('fonts:build', function () {
    gulp.src(vars.src.fonts)
        .pipe(gulp.dest(vars.build.fonts))
        .pipe(reload({stream: true}));
});