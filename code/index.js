



// Bringing in the Lodash dependency directly to bundle using Webpack
import _ from 'lodash'



function component( ) {
	var element = document.createElement( 'div' )
	// Mysterious creature Lodash involved in the following line of code
	element.innerHTML = _.join( [ 'Hello', 'Webpack' ], ' ' )
	return element
}


document.body.appendChild( component( ) )



