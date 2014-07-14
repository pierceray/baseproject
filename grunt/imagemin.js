module.exports = {
	options: {
		optimizationLevel: 3
	},
	static: {
		files: [ {
			expand: true,
			cwd: 'src/sprites',
			src: [ '**/*.{png,jpg,gif,svg}' ],
			dest: 'src/sprites'
		} ]
	},
	devdynamic: {
		files: [ {
			expand: true,
			cwd: 'src/img',
			src: [ '**/*.{png,jpg,gif,svg}' ],
			dest: 'src/img'
		} ]
	},
	distdynamic: {
		files: [ {
			expand: true,
			cwd: 'dist/img',
			src: [ '**/*.{png,jpg,gif,svg}' ],
			dest: 'dist/img'
		} ]
	}
};
