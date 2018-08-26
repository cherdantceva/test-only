module.exports = {
    build: {
        html: 'build/',
        components: 'build/components/',
        js: 'build/js/',
        css: 'build/',
        img: 'build/images/',
        fonts: 'build/fonts/',
        data: 'build/data/'
    },

    src: {
        pug: 'src/pages/*.pug',

        components: {
            pug: 'src/components/*/view.pug',
            img: 'src/components/*/images/*.*',
            scss: 'src/components/*/*.scss',
            js: 'src/components/*/*.js'
        },

        js: 'src/js/main.js',
        scss: 'src/scss/**/*.scss',
        styles: 'src/scss/',
        img: ['src/components/*/images/*.*'],
        svg: 'src/components/*/images/*.svg',
        fonts: 'src/fonts/**/*.*',
        data: 'src/data/**/*.*'
    },

    watch: {
        pug: 'src/pages/*.pug',
        js: 'src/components/*/*.js',
        scss: 'src/scss/**/*.scss',
        styles: 'src/components/*/*.scss',
        components: 'src/components/*/*.pug',
        img: 'src/components/*/images/*.*',
        svg: 'src/components/*/images/*.svg',
        fonts: 'src/fonts/**/*.*',
        data: 'src/data/**/*.*'
    },

    config: {
        server: {
            baseDir: './build'
        },
        tunnel: false,
        host: 'markup',
        port: 9000,
        logPrefix: 'likee_template'
    }
};