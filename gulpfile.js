var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css');

// Configure build-css task.
gulp.task('build-css', function() {
    return gulp.src('source/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'));
});

// Configure a task to watch scss files and run build-scss on any changes.
gulp.task('build-css:watch', function() {
    gulp.watch('source/scss/**/*.scss', gulp.series('build-css'));
});

// Configure the default task.
gulp.task('default', gulp.series('build-css', 'build-css:watch'));