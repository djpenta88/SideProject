let
	gulp = require('gulp'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload;

const
	INDEX = '/index.html',
	SRC = 'src';

gulp.task('serve', [], function () {

	browserSync({
		notify: false,
		https: false,
		port: 9000,
		startPath: INDEX,
		server: {
			baseDir: [SRC],
			routes: {
				'/bower_components': 'bower_components',
				'/node_modules': 'node_modules'
			}
		}
	});

	gulp.watch([SRC + '/**/*.html'], reload);
	gulp.watch([SRC + '/**/*.js'], reload);

});