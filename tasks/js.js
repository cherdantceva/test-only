var gulp = require('gulp'),
    rigger = require('gulp-rigger'),
    browserSync = require('browser-sync'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    webpackStream = require('webpack-stream'),
    reload = browserSync.reload,
    variables = require('../variables'),
    webpack = require('webpack'), //to access built-in plugins
    MinifyPlugin = require('babel-minify-webpack-plugin'),
    path = require('path');

gulp.task('js:build', function () {
    return gulp.src(variables.src.js)
        .pipe(webpackStream({
            output: {
                path: path.resolve(__dirname, 'dist'),
                filename: '[name].bundle.js'
            },
                module: {
                    rules: [
                        {
                            test: /\.js$/,
                            loader: "babel-loader",
                            query: {
                                presets: ['stage-0'],
                                compact: false
                            }
                        }
                    ]
                },
                plugins: [
                    //todo минифицировать код только при продакт-сборке
                    // new MinifyPlugin(),
                    new webpack.ProvidePlugin({
                        Popper: ['popper.js', 'default']
                    })
                ],
                externals: {
                    jquery: 'jQuery'
                }
        })
            .on('error', function handleError(error) {
                console.log('\nAchtung! There is an error in your javascript!\n');
                this.emit('end');
            })
        )
        .pipe(gulp.dest(variables.build.js))
        .pipe(reload({stream: true}));
});