import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
	// Initializes State:
	constructor() {
		super(); // Initializes the React component so that we can access "this".
		this.addFish = this.addFish.bind(this); // Weird ES6 bullsh#$%t to make "this" work for addFish method.
		this.loadSamples = this.loadSamples.bind(this); // Weird ES6 bullsh#$%t to make "this" work for loadSamples method.
		this.state = {
			// Creates initial state for fish and order.
			fishes: {},
			order: {}
		};
	}

	// Updates Fish State: 
	addFish(fish) {
		// 1. SET State (aka copy init state)
		const fishes = {...this.state.fishes}; // ES6 "Spread" = ...
		// 2. Add in new fish state.
		const timestamp = Date.now(); // Used for ordering and incrementing of fish objects
		fishes[`fish-${timestamp}`] = fish; // Passes info to update state with.
		// 3. UPDATE State
		this.setState({ fishes }) // -OR- ({ fishes: fishes })
		// fishes(STATE): fishes(OBJ of old and new fish) - Telling which part of State to update.
	}

	loadSamples() {
		this.setState({
			fishes: sampleFishes
		});
	}

	render() {
		return ( 
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market"/>
				</div>
				<Order />
				<Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
			</div>
			)
	}
}

export default App; // 