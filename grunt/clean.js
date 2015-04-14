var common = [
	'src/css',
	'src/img/sprites',
	'.sass-cache'
];

module.exports = function( grunt, options ){
	return {
		dist: common.concat(['dist']),
		dev: common
	}
};
