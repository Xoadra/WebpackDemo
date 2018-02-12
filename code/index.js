



// Bringing in used dependencies directly to bundle using Webpack
import _ from 'lodash'
import './style.css'



function component( ) {
	var element = document.createElement( 'div' )
	// Mysterious array-manipulating creature Lodash involved in the following line of code
	element.innerHTML = _.join( [ 'Hello', 'Webpack' ], ' ' )
	// Adds class to the element declared above using style and css loaders added to config file
	element.classList.add( 'hello' )
	return element
}


document.body.appendChild( component( ) )


