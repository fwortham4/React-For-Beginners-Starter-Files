import React from 'react'; // Imports react package and adds bundle.js to index.html head.
import { render } from 'react-dom'; // Imports ONLY the render method from the react-dom package.

import {BrowserRouter, Match, Miss} from 'react-router'; // Routing API (version 4)

import './css/style.css'; // links CSS stylesheet
import App from './components/App'; // Imports component App, which has all our other components in it.
import StorePicker from './components/StorePicker'; 
import NotFound from './components/NotFound'; 

const repo = `/${window.location.pathname.split('/')[1]}`

function Route() {
	return (
		<BrowserRouter baseName="/seafood-market/">
			<div>
				<Match exactly pattern="/" component={StorePicker} />
				<Match  pattern="/store/:storeId" component={App} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
}

render(<Route/>, document.querySelector('#main'));