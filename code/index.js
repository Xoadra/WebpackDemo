



// Bringing in used dependencies directly to bundle using Webpack
import travel from './print.js'
import _ from 'lodash'
// Use hmr on stylesheets by adding a css file dependency
import './style.css'



// Check environment variable to see if in development mode
if ( process.env.NODE_ENV !== 'production' ) {
	console.log( 'Development for you!' )
}

function component( ) {
	// Variables set as HTML elements
	var element = document.createElement( 'div' )
	var launch = document.createElement( 'button' )
	var sever = document.createElement( 'br' )
	// Mysterious array-manipulating creature Lodash involved in the following line of code
	element.innerHTML = _.join( [ 'Hello', 'Webpack' ], ' ' )
	// Trigger imported function from clicking imported button element created above
	launch.innerHTML = 'Launch the console, if you dare...'
	launch.onclick = travel
	element.appendChild( sever )
	// Insert created button element into the previously defined div 'element'
	element.appendChild( launch )
	return element
}

// Setup html element to rerender on updates to 'print.js'
let element = component( )
document.body.appendChild( element )

if ( module.hot ) {
	// Notify Webpack to accept an updated 'print.js' with hot module replacement active
	module.hot.accept( './print.js', function ( ) {
		console.log( 'Updated travel module accepted and incoming!!!' )
		// Delete old element and replace it with updated content
		document.body.removeChild( element )
		element = component( )
		// Render the new, updated element along with updated child elements
		document.body.appendChild( element )
	} )
}



