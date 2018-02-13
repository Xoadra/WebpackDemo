



// Using express server alongside Webpack server configurations
const express = require( 'express' )
const webpack = require( 'webpack' )
// Enhance customization of Webpack server with middleware
const midware = require( 'webpack-dev-middleware' )


// Setup the express server to be used
const net = express( )
// Grab Webpack settings for determining compiler behavior
const setup = require( './webpack.config.js' )
const build = webpack( setup )


// Make use of Webpack middleware and its configurations
net.use( midware( build, { publicPath: setup.output.publicPath } ) )

// Run server on port 3000
net.listen( 3000, function ( ) { console.log( 'Live on port 3000!' ) } )


