// ////////////////////////////////////////////////
//
// EDIT CONFIG OBJECT BELOW !!!
//
// jsConcatFiles => list of javascript files (in order) to concatenate
// buildFilesFoldersRemove => list of files to remove when running final build
// // //////////////////////////////////////////////
var config =
{
  jsConcatFilesApi:['./enlec_dashboard/app/js/**/*.js',],
  scssStyles:['./enlec_dashboard/app/views/scss/**/*.scss',]
};

// ////////////////////////////////////////////////
// Required taskes
// gulp build
// bulp build:serve
// // /////////////////////////////////////////////
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    replace = require('gulp-replace'),
    del = require('del');

// ////////////////////////////////////////////////
// Log Errors
// // /////////////////////////////////////////////
function errorlog(err)
{
  console.error(err.message);
  this.emit('end');
}

// ////////////////////////////////////////////////
// Scripts Tasks
// ///////////////////////////////////////////////
gulp.task('scriptsApi', function()
{
  return gulp.src(config.jsConcatFilesApi)
	           .pipe(concat('temp.js'))
          	 .pipe(uglify())
          	 .on('error', errorlog)
          	 .pipe(rename('d3EnlecDane.min.js'))
          	 .pipe(gulp.dest('./enlec_dashboard/app/min/'))
          	 .pipe(reload({stream:true}));
});

// ////////////////////////////////////////////////
// Styles Tasks
// ///////////////////////////////////////////////
gulp.task('styles', function()
{
  gulp.src(config.scssStyles)
	    .pipe(sass({outputStyle:'compressed'}))
	    .on('error', errorlog)
	    .pipe(autoprefixer({browsers:['last 3 versions'], cascade:false}))
	    .pipe(gulp.dest('./enlec_dashboard/app/views/css/'));
});

// ////////////////////////////////////////////////
// HTML Tasks
// // /////////////////////////////////////////////
gulp.task('html', function()
{
  gulp.src('./enlec_dashboard/app/views/**/*.html')
	    .pipe(reload({stream:true}));
});

// ////////////////////////////////////////////////
// Browser-Sync Tasks
// // /////////////////////////////////////////////
gulp.task('browser-sync', function()
{
  browserSync({server:{baseDir:"./enlec_dashboard/"}});
});

// task to run build server for testing final app
gulp.task('build:serve', function()
{
  browserSync({server:{baseDir:"./build"}});
});

// ////////////////////////////////////////////////
// Build Tasks
// // /////////////////////////////////////////////

// clean out all files and folders from build folder
gulp.task('build:cleanfolder', function (cb)
{
  del(['./build/**'], cb);
});

// task to create build directory of all files
gulp.task('build:copy',function()
{
  return gulp.src('./**/*/')
	           .pipe(gulp.dest('./build/'));
});

// task to removed unwanted build files
// list all files and directories here that you don't want included
gulp.task('build:remove', function (cb)
{
  del(config.buildFilesFoldersRemove, cb);
});

gulp.task('build', ['build:copy', 'build:remove', 'directiveString','minString']);

// ////////////////////////////////////////////////
// Watch Tasks
// // /////////////////////////////////////////////
gulp.task('watch', function()
{
  gulp.watch('./enlec_dashboard/app/views/scss/**/*.scss', ['styles']);
  gulp.watch('./enlec_dashboard/app/js/**/*.js', ['scriptsApi']);
  gulp.watch('./enlec_dashboard/app/views/**/*.html', ['html']);
});

gulp.task('default', ['scriptsApi', 'styles', 'html', 'browser-sync', 'watch']);
