var gulp = require('gulp'),
    watch = require('gulp-watch'),
    vars = require('../variables'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

gulp.task('watch', function () {
    watch([vars.watch.pug], function () {
        gulp.start('pug:build')
            .pipe(reload({stream: true}));
    });

    watch([vars.watch.components], function () {
        gulp.start('pug:build');
        gulp.start('components.pug:build')
            .pipe(reload({stream: true}));
    });

    watch([vars.watch.scss], function () {
        gulp.start('scss:build')
            .pipe(reload({stream: true}));
    });

    watch([vars.watch.styles], function () {
        gulp.start('scss:build')
            .pipe(reload({stream: true}));
    });

    watch([vars.watch.js], function () {
        gulp.start('js:build');
        browserSync.reload()
            .pipe(reload({stream: true}));
    });

    watch([vars.watch.img], function () {
        gulp.start('images:build')
            .pipe(reload({stream: true}));
    });

    watch([vars.watch.svg], function () {
        gulp.start('sprites:build')
            .pipe(reload({stream: true}));
    });

    watch([vars.watch.fonts], function () {
        gulp.start('fonts:build')
            .pipe(reload({stream: true}));
    });

    watch([vars.watch.data], function () {
        gulp.start('data:build')
            .pipe(reload({stream: true}));
    });
});