const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const minify = require('gulp-minify');


gulp.task('styles', function(){
    return gulp.src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
})

gulp.task('watch', function(){
    return gulp.watch('scss/**/*.scss',  gulp.series(['styles']))
})

gulp.task('minifyjs', function(){
    return gulp.src('js/*.js')
    .pipe(minify())
    .pipe(gulp.dest('js'));
})
