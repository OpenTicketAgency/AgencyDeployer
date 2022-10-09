
var path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname,'../docs/lib'),
		filename: 'ticketagencydeployer.js',
		library: 'OpenTicketAgency',
		libraryTarget: 'window',
		globalObject: 'window'
	}
};
