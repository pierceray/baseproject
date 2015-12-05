// Because the grunt-contrib-jshint plugin doesn't merge options
// I'm parsing the .jshintrc file with node, and adding an override
// for the node based files in the buildsystem.

var jsintrcOptions = JSON.parse(require('fs').readFileSync('.jshintrc', 'utf8'));

module.exports = {
	options: jsintrcOptions,
	buildsystem: {
		options: {
			'node': true
		},
		src: [
			'Gruntfile.js',
			'grunt/**/*.js'
		]
	},
	source: {
		src: [
			'src/**/*.js',
			//blacklist
			'!src/scripts/jquery.fitvids.js'
		]
	}

};
