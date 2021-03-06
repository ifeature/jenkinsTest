'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');

gulp.task('default', function() {
	return gulp.src('./**/*.less')
	.pipe(less({
		paths: [ path.join(__dirname, 'less', 'includes') ]
	}))
	.pipe(gulp.dest('./'));
})