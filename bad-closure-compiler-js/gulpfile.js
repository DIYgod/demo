const gulp = require('gulp');
const compilerJS = require('google-closure-compiler-js').gulp();
const compilerJava = require('gulp-closure-compiler');

gulp.task('js', function () {
    return gulp.src('main.js', { base: './' })
        .pipe(compilerJS({
            jsOutputFile: 'dist/main.jsgulp.min.js',
            compilationLevel: 'ADVANCED',
            externs: [
                { path: 'externs.js' }
            ],
            warningLevel: 'QUIET',
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('java', function () {
    return gulp.src('main.js', { base: './' })
        .pipe(compilerJava({
            fileName: 'dist/main.java.min.js',
            compilerFlags: {
                compilation_level: 'ADVANCED_OPTIMIZATIONS',
                externs: [
                    'externs.js'
                ],
                warning_level: 'QUIET'
          }
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['js', 'java']);