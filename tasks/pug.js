var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    pug = require('gulp-pug'),
    gulpif = require('gulp-if'),
    emitty = require('emitty').setup('src', 'pug'),
    reload = browserSync.reload,
    plumber = require('gulp-plumber'),
    data = require('gulp-data'),
    pretty = require('gulp-html-beautify'),
    vars = require('../variables');

gulp.task('pug:build', function () {
    gulp.src(vars.src.pug)
        .pipe(plumber())
        .pipe(data(function (file) {
            return require('../src/data.json');
        }))
        .pipe(gulpif(global.watch, emitty.stream()))
        .pipe(pug())
        .pipe(pretty())
        .pipe(gulp.dest(vars.build.html))
        .pipe(reload({stream: true}));
});