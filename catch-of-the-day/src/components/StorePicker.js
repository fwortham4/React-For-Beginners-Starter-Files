import React from 'react'; // Imports react package and adds bundle.js to index.html head.

// Component - like a custom HTML tag.
class StorePicker extends React.Component {
	// Require at least 1 (ES6) method (typically render())
	render() {
		return ( 
			// JSX goes in here (ex. <p>Hello</p> )
			// 1.) HTML- class : JSX className
			// 2.) JSX can ONLY return 1 parent element.
			
			<form action="" className="store-selector">
				<h2>Please Enter a Store</h2>
				<input type="text" required placeholder="Store Name"/>
				<button type="submit">Visit Store</button>
			</form>
			)
	}
}

export default StorePicker; // 