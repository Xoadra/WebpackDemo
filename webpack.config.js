



// Require plugin to automatically generate html files
const Html = require( 'html-webpack-plugin' )
// Appears to be used to configure where bundled files are distributed
const path = require( 'path' )


module.exports = {
	// Entry points for Webpack's bundling process
	entry: {
		app: './code/index.js',
		print: './code/print.js'
	},
	// Plugins declared and their settings
	plugins: [
		new Html( { title: ' Webpack Demo ' } )
	],
	// Output destination and name parameters for bundled files
	output: {
		filename: '[name].bundle.js',
		path: path.resolve( __dirname, 'root' )
	}
}



