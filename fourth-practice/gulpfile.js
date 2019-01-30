var gulp = require('gulp');
var concat = require('gulp-concat');

var path = {
    html: './src/templates/*.html',
    css: './src/styles/*.css',
    build: {
        html: './build/',
        css: './build/'
    }
};

gulp.task('default', ['html', 'css']);

gulp.task('html', function () {
    return gulp.src(path.html)
        .pipe(gulp.dest(path.build.html));
});

gulp.task('css', function () {
   return gulp.src(path.css)
       .pipe(concat('style.css'))
       .pipe(gulp.dest(path.build.css));
});