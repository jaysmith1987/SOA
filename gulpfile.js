'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var mnsCoreUi = require('mns-core-ui');

gulp.task('defualt', function(){
    return gulp.src('./sass/**/*.scss')
    .pipe(sass({
       includePaths: mnsCoreUi.sassPaths }))
    .pipe(gulp.dest('./public/css'))
    
})

gulp.task('watch', function(){
    gulp.watch('./sass/**/*.scss', ['sass']);
});

