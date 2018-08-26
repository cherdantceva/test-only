var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite_l'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    replace = require('gulp-replace'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    vars = require('../variables');

gulp.task('sprites:build', function () {
    return gulp.src(vars.src.svg)
    // minify svg
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        // remove all fill, style and stroke declarations in out shapes
        .pipe(cheerio({
            run: function ($) {
                $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
            },
            parserOptions: {xmlMode: true}
        }))
        // cheerio plugin create unnecessary string '&gt;', so replace it.
        .pipe(replace('&gt;', '>'))
        // build svg sprite
        .pipe(svgSprite({
            mode: {
                symbol: {
                    sprite: '../sprite.svg',
                    render: {
                        scss: {
                            dest: '../../../' + vars.src.styles + '/_sprite.scss',
                            template: vars.src.styles + '/sprite_template'
                        }
                    }
                }
            }
        }))
        .pipe(gulp.dest(vars.build.img))
        .pipe(reload({stream: true}));
});