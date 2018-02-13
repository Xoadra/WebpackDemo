



// Require plugins to generate html and remove output files before build
const Html = require( 'html-webpack-plugin' )
const Bye = require( 'clean-webpack-plugin' )
// Appears to be used to configure where bundled files are distributed
const path = require( 'path' )


module.exports = {
	// Entry points for Webpack's bundling process
	entry: {
		app: './code/index.js',
		print: './code/print.js'
	},
	// Tooling for development to assist in error sourcing
	devtool: 'inline-source-map',
	// Development server parameters Webpack uses for live updates
	devServer: {
		// Identify folder for server to distribute files into
		contentBase: './root'
		// Server defaults to localhost:8080
	},
	// Plugins declared and their settings
	plugins: [
		new Bye( [ 'root' ] ),
		new Html( { title: ' Webpack Demo ' } )
	],
	// Output destination and name parameters for bundled files
	output: {
		filename: '[name].bundle.js',
		path: path.resolve( __dirname, 'root' ),
		// Where files will be served at using the Webpack server script
		publicPath: '/'
	}
}



