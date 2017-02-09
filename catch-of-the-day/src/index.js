import React from 'react'; // Imports react package and adds bundle.js to index.html head.
import { render } from 'react-dom'; // Imports ONLY the render method from the react-dom package.
import './css/style.css'; // links CSS stylesheet
import App from './components/App';
import StorePicker from './components/StorePicker';

render(<App/>, document.querySelector('#main'));