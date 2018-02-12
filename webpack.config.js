



// Appears to be used to configure where bundled files are distributed
const path = require( 'path' )


module.exports = {
	// Marks the entry point for Webpack to deploy its dirty little magic
	entry: './code/index.js',
	// Output destination for the bundled file and by which name
	output: {
		filename: 'bundle.js',
		path: path.resolve( __dirname, 'root' )
	}
}


