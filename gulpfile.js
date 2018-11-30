'use strict';

var gulp = require('gulp'),
    gp = require('gulp-load-plugins')();


gulp.task('sass', function(){
        return gulp.src('src/static/sass/main.scss')
            .pipe(gp.sourcemaps.init())
            .pipe(gp.plumberNotifier())
            .pipe(gp.sass({
                pretty:true
            }))
            .pipe(gp.autoprefixer({
                browsers: ['last 10 versions']
            }))
            .on("error", gp.notify.onError({
                title: "stile"
            }))
            .pipe(gp.csscomb())
            .pipe(gp.cssbeautify({indent: ' '}))
            .pipe(gp.sourcemaps.write())
            .pipe(gulp.dest('build/static/css/'))
});
    
gulp.task('watch', function(){
    gulp.watch('src/static/sass/**/*.scss', ['sass']);
});
    
gulp.task('build', ['sass', 'watch']);
    
gulp.task('default', ['build'])
    