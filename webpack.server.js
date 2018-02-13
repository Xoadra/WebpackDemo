



// Separate Webpacks's dev server settings from original config file for use with Node api



// Bring in webpack and its development server for configuration and startup
const develop = require( 'webpack-dev-server' )
const webpack = require( 'webpack' )


// Establish original Webpack parameters as a base
const setup = require( './webpack.config.js' )
// Settings for the Webpack development server
const ops = {
	// Declare the distribution folder
	contentBase: './root',
	// Hmr activated
	hot: true,
	// Where to host development server
	host: localhost
}

// Guess is this gives the Webpack server needed entry points from config file to do its stuff
develop.addDevServerEntrypoints( setup, ops )
// Prepare fresh instances of the server and Webpack presumably for individual sessions only
const build = webpack( setup )
const server = new develop( setup, ops )

// Launch the development server at port 5000
server.listen( 5000, 'localhost', ( ) => { console.log( 'Develop server for webpack on 5000!!!' ) } )


