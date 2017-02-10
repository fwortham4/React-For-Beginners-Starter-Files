import React from 'react'; // Imports react package and adds bundle.js to index.html head.
import { render } from 'react-dom'; // Imports ONLY the render method from the react-dom package.

import {BrowserRouter, Match, Miss} from 'react-router'; // Routing API (version 4)

import './css/style.css'; // links CSS stylesheet
import App from './components/App'; // Imports component App, which has all our other components in it.
import StorePicker from './components/StorePicker'; 
import NotFound from './components/NotFound'; 

function Route() {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={StorePicker} />
				<Match  pattern="/store/StoreId:" component={App} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
}

render(<Route/>, document.querySelector('#main'));