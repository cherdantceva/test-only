var gulp = require('gulp'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    csso = require('gulp-csso'),
    vars = require('../variables');

gulp.task('scss:build', function () {
    gulp.src(vars.src.scss)
        .pipe(plumber())
        .pipe(sass({
            includePaths: ['src/style/', 'src/components/**'],
            /*outputStyle: 'compressed',*/
            sourceMap: false,
            errLogToConsole: true
        }))
        .pipe(prefixer())
        .pipe(csso({
            restructure: true
        }))
        .pipe(gulp.dest(vars.build.css))
        .pipe(reload({stream: true}));
});