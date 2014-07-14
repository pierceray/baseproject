module.exports = {
	dev : {
		path: 'http://<%= connect.dev.options.hostname %>:<%= connect.dev.options.port%>',
	},
	dist : {
		path: 'http://<%= connect.dist.options.hostname %>:<%= connect.dist.options.port%>',
	}
};
