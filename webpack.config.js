



// Appears to be used to configure where bundled files are distributed
const path = require( 'path' )


module.exports = {
	// Entry point for Webpack to deploy its dirty little magic
	entry: './code/index.js',
	// Output destination for the bundled file and by which name
	output: {
		filename: 'bundle.js',
		path: path.resolve( __dirname, 'root' )
	},
	// Seems to define modules to use and their rules of use
	module: {
		rules: [ {
			// Regex to locate files to pass to the declared loader modules
			test: /\.css$/,
			// Loaders chosen to use for the above file types
			use: [
				'style-loader',
				'css-loader'
			]
		} ]
	}
}


