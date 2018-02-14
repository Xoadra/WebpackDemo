



// Uglify code to make use of tree-shaking, or clearing out unused code from bundles
const Uglify = require( 'uglifyjs-webpack-plugin' )

// Apply shared Webpack settings to production setup
const amalgam = require( 'webpack-merge' )
const common = require( './webpack.common.js' )


module.exports = amalgam( common, {
	// Set source map tool with optimized build speeds for production and benchmark tests
	devtool: 'source-map',
	// Installed plugins for creating optimal production builds
	plugins: [
		// Exclude unused code with minified bundles plus source mapping for errors
		new Uglify( { sourceMap: true } )
	],
} )


