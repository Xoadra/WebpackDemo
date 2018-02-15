



// Allows plugin for extracting of boilerplate and manifest - whatever that means...
const Webpack = require( 'webpack' )
// Require plugins to generate html and remove output files before build
const Html = require( 'html-webpack-plugin' )
const Clean = require( 'clean-webpack-plugin' )

// Configures Webpack pathing such as where bundled files are distributed
const path = require( 'path' )


module.exports = {
	// Entry points for Webpack's bundling process
	entry: {
		main: './code/index.js',
		// Distinguish third-party libraries from source code by listing dependencies
		vendor: [ 'lodash' ]
	},
	// Bring in modules and set their rules of use
	module: {
		rules: [ { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] } ]
	},
	// Listed plugins implemented and their settings
	plugins: [
		// Maintenance plugin for wiping the distribution folder before builds
		new Clean( [ 'root' ] ),
		// Html plugin for automatic template generation with given settings
		new Html( { title: ' Webpack Demo ' } ),
		// Perform same behavior as before but by bundling third-party libraries separately
		new Webpack.optimize.CommonsChunkPlugin( { name: 'vendor' } ),
		// Separates out code into its own bundle by specifying its name instead of an entry point
		new Webpack.optimize.CommonsChunkPlugin( { name: 'manifest' } )
	],
	// Output destination and name parameters for bundled files
	output: {
		// Include chunkhash in bundle names for detecting file changes for caching purposes
		filename: '[name].[chunkhash].js',
		// Naming parameters for bundles generated from dynamic code splitting
		chunkFilename: '[name].bundle.js',
		path: path.resolve( __dirname, 'root' ),
		// Where files will be served at using the Webpack server script
		publicPath: '/'
	}
}


