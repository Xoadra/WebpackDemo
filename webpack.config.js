



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
	// Define tooling to assist in development and error sourcing
	devtool: 'inline-source-map',
	// Plugins declared and their settings
	plugins: [
		new Html( { title: ' Webpack Demo ' } ),
		new Bye( [ 'root' ] )
	],
	// Output destination and name parameters for bundled files
	output: {
		filename: '[name].bundle.js',
		path: path.resolve( __dirname, 'root' )
	}
}



