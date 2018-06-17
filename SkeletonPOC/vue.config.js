/*eslint-disable*/
module.exports = {
	baseUrl: '/',
	configureWebpack: (config) => {
		if (process.env.NODE_ENV === 'production') {
		// mutate config for production...
		} else {
			return {
				devtool: 'source-map'
			}
		}
	}
};
