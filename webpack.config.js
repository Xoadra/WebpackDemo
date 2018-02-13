



// Require plugins to generate html and remove output files before build
const Html = require( 'html-webpack-plugin' )
const Clean = require( 'clean-webpack-plugin' )
// Pull in native Webpack plugins for use in hot module replacement
const Webpack = require( 'webpack' )

// Configures Webpack pathing such as where bundled files are distributed
const path = require( 'path' )


module.exports = {
	// Entry points for Webpack's bundling process
	entry: {
		app: './code/index.js'
	},
	// Tooling for development to assist in error sourcing
	devtool: 'inline-source-map',
	// Development server Webpack uses for live updates defaulting to localhost:8080
	devServer: {
		// Identify folder for server to distribute files into
		contentBase: './root',
		// Activate hot module replacement, or real-time server and module updates
		hot: true
	},
	// Listed plugins implemented and their settings
	plugins: [
		// Maintenance plugin for wiping the distribution folder before builds
		new Clean( [ 'root' ] ),
		// Html plugin for automatic template generation with given settings
		new Html( { title: ' Webpack Demo ' } ),
		new Webpack.NamedModulesPlugin( ),
		// Set plugin for hot module replacement
		new Webpack.HotModuleReplacementPlugin( )
	],
	// Output destination and name parameters for bundled files
	output: {
		filename: '[name].bundle.js',
		path: path.resolve( __dirname, 'root' ),
		// Where files will be served at using the Webpack server script
		publicPath: '/'
	}
}



