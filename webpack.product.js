



// Uglify code to make use of tree-shaking, or clearing out unused code from bundles
const Uglify = require( 'uglifyjs-webpack-plugin' )

// Sync shared Webpack settings to production config
const amalgam = require( 'webpack-merge' )
const common = require( './webpack.common.js' )


module.exports = amalgam( common, {
	plugins: [
		// Neglect unused code in final distributed bundles
		new Uglify( ),
	],
} )



