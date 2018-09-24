/* eslint-env node */
const gulp = require('gulp');
const gls = require('gulp-live-server');

gulp.task('serve', function () {
    //1. serve with default settings
    const server = gls.static('.', 3001); //equals to gls.static('public', 3000);
    server.start();

    //use gulp.watch to trigger server actions(notify, start or stop)
    gulp.watch(['index.html', 'restaurant.html', 'css/style.css', 'js/*.js'], function (file) {
        server.notify.apply(server, [file]);
    });
});