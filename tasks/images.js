var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    vars = require('../variables');

gulp.task('images:build', function () {
    gulp.src(vars.src.img)
        .pipe(plumber())
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(vars.build.img))
        .pipe(plumber())
        .pipe(reload({stream: true}));
});