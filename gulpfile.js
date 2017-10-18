const gulp         = require('gulp');
//Sass plugin for Gulp. https://www.npmjs.com/package/gulp-sass
const sass         = require('gulp-sass');
//Prefix CSS with Autoprefixer. https://www.npmjs.com/package/gulp-autoprefixer
const autoprefixer = require('gulp-autoprefixer');
//gulp plugin to minify CSS, using clean-css. https://www.npmjs.com/package/gulp-clean-css
const cleanCSS     = require('gulp-clean-css');
//gulp-rename is a gulp plugin to rename files easily.  https://www.npmjs.com/package/gulp-rename
const rename       = require('gulp-rename');
//https://www.npmjs.com/package/browser-sync
const browserSync  = require('browser-sync').create();
//https://www.npmjs.com/package/gulp-concat
const concat       = require('gulp-concat');
//Minify JavaScript with UglifyJS2. https://www.npmjs.com/package/gulp-uglify
const uglify       = require('gulp-uglify');
//https://www.npmjs.com/package/gulp-sourcemaps for babel
const sourcemaps   = require('gulp-sourcemaps');
//Use next generation JavaScript, today, with Babel https://www.npmjs.com/package/gulp-babel
const babel 	   = require('gulp-babel');

//Connection  directory 'src'  browsersync
gulp.task('browser-sync', ['styles', 'scripts'], ()=> {
		browserSync.init({
				server: {
						baseDir: "./dist"
				},
				notify: false
		});
});

//Task 'Scripts' for babel, *.js in src we concat in one js file in dist
gulp.task('scripts', () =>
gulp.src('src/**/*.js')
//Use gulp-sourcemaps like this:
	.pipe(sourcemaps.init())
	.pipe(babel({
		presets: ['env']
	}))
	
	.pipe(concat('js/all.js'))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('dist'))
);

//Pass in options just like you would for node-sass; 
//they will be passed along just as if you were using node-sass. 
//Except for the data option which is used by gulp-sass internally. 
//Using the file option is also unsupported and results in undefined behaviour that may change without notice.
gulp.task('styles', ()=> {
	return gulp.src('src/sass/*.sass')
	.pipe(sass({
		includePaths: require('node-bourbon').includePaths
	}).on('error', sass.logError))
	.pipe(rename({suffix: '.min', prefix : ''}))
	//Autoprefix
	.pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
	//See clean options https://github.com/jakubpawlowicz/clean-css#how-to-use-clean-css-api
	.pipe(cleanCSS())
	.pipe(gulp.dest('dist/css'))
	.pipe(browserSync.stream());
});


//Live reload for sass, js, html
gulp.task('watch', ()=> {
	gulp.watch('src/sass/*.sass', ['styles']);
	gulp.watch('src/js/*.js', ['scripts']).on("change", browserSync.reload);
	gulp.watch('dist/*.html').on('change', browserSync.reload);
});


gulp.task('default', ['browser-sync', 'watch']);
