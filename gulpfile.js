/* eslint-env node */
const gulp = require('gulp');
const gls = require('gulp-live-server');
const sass = require('gulp-sass');

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