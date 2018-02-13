



// Bringing in used dependencies directly to bundle using Webpack
import _ from 'lodash'
import './style.css'
import Icon from './dragon.png'
import Data from './data.xml'



function component( ) {
	// Variables to host imported data
	var element = document.createElement( 'div' )
	var dragon = new Image( )
	// Mysterious array-manipulating creature Lodash involved in the following line of code
	element.innerHTML = _.join( [ 'Hello', 'Webpack' ], ' ' )
	// Adds class to the element declared above using style and css loaders added to config file
	element.classList.add( 'hello' )
	// Set image object to the imported graphic
	dragon.src = Icon
	// Inserts image into the above element
	element.appendChild( dragon )
	// Display imported data
	console.log( Data )
	return element
}


document.body.appendChild( component( ) )


