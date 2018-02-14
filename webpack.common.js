



// Deduplicate shared dependencies across multiple bundles with Webpack's chunk plugin
const Webpack = require( 'webpack' )
// Require plugins to generate html and remove output files before build
const Html = require( 'html-webpack-plugin' )
const Clean = require( 'clean-webpack-plugin' )

// Configures Webpack pathing such as where bundled files are distributed
const path = require( 'path' )


module.exports = {
	// Entry points for Webpack's bundling process
	entry: {
		/* app: './code/index.js' */
		index: './code/index.js',
		another: './code/another.js'
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
		// Split off shared dependencies into a separate chunk, bundled under the name below
		new Webpack.optimize.CommonsChunkPlugin( { name: 'common' } )
	],
	// Output destination and name parameters for bundled files
	output: {
		filename: '[name].bundle.js',
		path: path.resolve( __dirname, 'root' ),
		// Where files will be served at using the Webpack server script
		publicPath: '/'
	}
}



