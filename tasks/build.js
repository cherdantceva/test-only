var gulp = require('gulp');

gulp.task('build', [
    'data:build',
    'pug:build',
    'components.pug:build',
    'scss:build',
    'js:build',
    'fonts:build',
    'images:build',
    'sprites:build'
]);