/* eslint-env node */
const gulp = require('gulp');
const gls = require('gulp-live-server');
const sass = require('gulp-sass');
const responsive = require('gulp-responsive');

gulp.task('serve', function () {
    const server = gls.static('.', 3001);
    server.start();

    gulp.watch(['index.html', 'restaurant.html', 'css/style.css', 'js/*.js'], function (file) {
        server.notify.apply(server, [file]);
    });
});

gulp.task('sass', function () {
    return gulp.src('./scss/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./scss/*.scss', gulp.series('sass'));
});

gulp.task('images', function () {
    return gulp.src('img/*.{jpg,png}')
        .pipe(responsive({
            '*.jpg': [{
                width: 320,
                rename: { suffix: '-320px' },
            }, {
                width: 640,
                rename: { suffix: '-640px' },
            }, {
                width: 800,
                rename: { suffix: '-800px' },
            }, {
                rename: { suffix: '-original' },
            }]
        }, {
            quality: 70,
            progressive: true,
            withMetadata: false,
        }))
        .pipe(gulp.dest('dist'));
});
