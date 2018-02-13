



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
	// May define modules to use and their rules of use
	module: {
		// Rules using regex to identify file extentions to pass to declared loaders
		rules: [
			// Style and css loaders for stylesheets
			{ test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
			// File loader to on image files
			{ test: /\.(png|svg|jpg|gif)$/, use: [ 'file-loader' ] },
			// Using file loader again this time for fonts
			{ test: /\.(woff|woff2|eot|ttf|otf)$/, use: [ 'file-loader' ] },
			// Xml, csv, and tsv file loading to display data as json
			{ test: /\.(csv|tsv)$/, use: [ 'csv-loader' ] },
			{ test: /\.xml$/, use: [ 'xml-loader' ] }
		]
	}
}



