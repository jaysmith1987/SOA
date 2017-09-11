'use strict';

var gulp = require('gulp');


gulp.task('default', [], function(){
    console.log('Moving files to destination folder');
    gulp.src("bower_components/**")  
        .pipe(gulp.dest('public/js/vendor'));  
});

