module.exports = {
	configFiles: {
		files: [
			'Gruntfile.js',
			'grunt/**/*.{js,yaml}'
		],
		reload: true
	},
	js: {
		files: [
			'Gruntfile.js',
			'grunt/**/*.js',
			'src/**/*.js'
		],
		tasks: [
			'jshint'
		],
		options: {
			livereload: true
		}
	},
	sass: {
		files: [
			'src/sass/**/*.scss'
		],
		tasks: [
			'compass:dev',
			'autoprefixer:dev'
		],
		options: {
			livereload: true
		}
	},
	html: {
		files: [
			'src/**/*.html'
		],
		options: {
			livereload: true
		}
	}
};
