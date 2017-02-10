import React from 'react'; // Imports react package and adds bundle.js to index.html head.
import { getFunName } from '../helpers'; // Imports function from Helpers.js 

// Component - like a custom HTML tag.
// Require at least 1 (ES6) method (typically render())
class StorePicker extends React.Component {

	// Weird ES6 bullsh#$%t to make "this" refer to StorePicker.
	// constructor() {
	// 	super();
	// 	this.goToStore = this.goToStore.bind(this);
	// }

	goToStore(event) {
		event.preventDefault();
		console.log('I changed the URL!@#$%');

		// 1. Grab text from the user input from StorePicker.
		// NOTE: In React, stay away from touching the DOM!!!; Instead use "ref".
		console.log(this.storeInput.value);

		// 2. Transition from "/" to "/store/:storeId"
	}

	render() {
		return ( 
			// JSX goes in here (ex. <p>Hello</p> )
			// 1.) HTML- class : JSX className
			// 2.) JSX can ONLY return 1 parent element.
			
			<form action="" className="store-selector" onSubmit={(e) => this.goToStore(e)}>
				<h2>Please Enter a Store</h2>
				<input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={ (input) => { this.storeInput = input}} />
				<button type="submit">Visit Store</button>
			</form>
			)
	}
}

export default StorePicker; // 