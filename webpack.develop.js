



// Use native Webpack plugins for adding hot module replacement
const Webpack = require( 'webpack' )

// Link up shared Webpack settings to development config
const amalgam = require( 'webpack-merge' )
const common = require( './webpack.common.js' )


module.exports = amalgam( common, {
	// Tooling for development to assist in error sourcing
	devtool: 'inline-source-map',
	// Development server Webpack uses for live updates defaulting to localhost:8080
	devServer: {
		// Identify folder for server to distribute files into
		contentBase: './root',
		// Activate hot module replacement, or real-time server and module updates
		hot: true
	},
	// Plugins implemented and their settings
	plugins: [
		new Webpack.NamedModulesPlugin( ),
		// Set plugin for hot module replacement
		new Webpack.HotModuleReplacementPlugin( )
	],
} )


