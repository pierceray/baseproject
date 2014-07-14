module.exports = {
	files: [
		'Gruntfile.js',
		'grunt/**/*.js',
		'src/**/*.js',
		//blacklist
		'!src/scripts/jquery.fitvids.js'
	],
	options: {
		jshintrc: true
	}

};
