import React from 'react'; // Imports react package and adds bundle.js to index.html head.
import { render } from 'react-dom'; // Imports ONLY the render method from the react-dom package.

import StorePicker from './components/StorePicker';

render(<StorePicker/>, document.querySelector('#main'));