import React from 'react'; // Imports react package and adds bundle.js to index.html head.
import { render } from 'react-dom'; // Imports ONLY the render method from the react-dom package.

// Component - like a custom HTML tag.
class StorePicker extends React.Component {
	// Require at least 1 (ES6) method (typically render())
	render() {
		return <p>Hello</p> // JSX
	}
}

render(<StorePicker/>, document.querySelector('#main'));