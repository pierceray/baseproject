module.exports = {
	dist: {
		options: {
			sassDir: 'src/sass',
			cssDir: 'dist/css',
			relativeAssets: true,
			imagesDir: 'src/sprites',
			generatedImagesDir: 'dist/img/sprites',
			httpGeneratedImagesPath: 'img/sprites',
			environment: 'production',
			outputStyle: 'compressed'
		}
	},
	dev: {
		options: {
			sassDir: 'src/sass',
			cssDir: 'src/css',
			relativeAssets: true,
			imagesDir: 'src/sprites',
			generatedImagesDir: 'src/img/sprites',
			httpGeneratedImagesPath: 'img/sprites'
		}
	}
};
