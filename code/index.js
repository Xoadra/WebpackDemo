



// Bringing in used dependencies directly to bundle using Webpack
import travel from './print.js'
import _ from 'lodash'



function component( ) {
	// Variables set as HTML elements
	var element = document.createElement( 'div' )
	var launch = document.createElement( 'button' )
	// Mysterious array-manipulating creature Lodash involved in the following line of code
	element.innerHTML = _.join( [ 'Hello', 'Webpack' ], ' ' )
	// Trigger imported function from clicking imported button element created above
	launch.innerHTML = 'Launch the console, if you dare...'
	launch.onclick = travel
	// Insert created button element into the previously defined div 'element'
	element.appendChild( launch )
	return element
}


document.body.appendChild( component( ) )



