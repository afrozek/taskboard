// var gulp = require('gulp'),
// 	concat = require('gulp-concat'),
// 	uglify = require('gulp-uglify'),
// 	sourcemaps = require('gulp-sourcemaps'),
// 	nodemon = require('gulp-nodemon');

// var allModules = './public/js/**/*.module.js',
// 	jsPath = './public/js/**/*.js';  

// gulp.task('concatAndMinifyJS', function () {
// 	return gulp.src([allModules, jsPath])
// 			.pipe(sourcemaps.init())
// 			.pipe(concat('main.js'))
// 			.pipe(uglify())
// 			.pipe(sourcemaps.write())
// 			.pipe(gulp.dest('./public'));
// });

// gulp.task('watchConcatAndMinifyJS', function () {
// 	gulp.watch([jsPath], ['concatAndMinifyJS']);
// });

// gulp.task('startServer', function () {
// 	nodemon({ script: 'server.js' });
// });

// gulp.task('default', Object.keys(gulp.tasks));