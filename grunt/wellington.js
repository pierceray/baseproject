// Using a variable to share between both targets, but have independent configs
var sassfiles = [
		'src/sass/**/*.scss'
	];

module.exports = {
	dist: {
		src: sassfiles,
		options: {
			p: 'src/sass',
			b: 'dist/css',
			d: 'dist/img',
			font: 'font-face',
			gen: 'dist/img/sprites'
		}
	},
	dev: {
		src: sassfiles,
		options: {
			p: 'src/sass',
			b: 'src/css',
			d: 'src/sprites',
			font: 'font-face',
			gen: 'src/img/sprites'
		}
	}
};
