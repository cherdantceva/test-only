var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    pug = require('gulp-pug'),
    reload = browserSync.reload,
    plumber = require('gulp-plumber'),
    pretty = require('gulp-html-beautify'),
    data = require('gulp-data'),
    inject = require('gulp-inject-string'),
    vars = require('../variables');


//сборка компонентов
gulp.task('components.pug:build', function () {
    gulp.src(vars.src.components.pug)
        .pipe(plumber())
        .pipe(data(function (file) {
            return require('../src/data.json');
        }))
        .pipe(pug())
        .pipe(pretty())
        .pipe(inject.replace('images/', '../../images/'))
        .pipe(gulp.dest(vars.build.components))
        .pipe(reload({stream: true}));
});