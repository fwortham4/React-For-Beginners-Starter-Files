import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
	// Initializes State:
	constructor() {
		super(); // Initializes the React component so that we can access "this".
		this.addFish = this.addFish.bind(this); // Weird ES6 bullsh#$%t to make "this" work for addFish method.
		this.loadSamples = this.loadSamples.bind(this); // Weird ES6 bullsh#$%t to make "this" work for loadSamples method.
		this.addToOrder = this.addToOrder.bind(this); // Weird ES6 bullsh#$%t to make "this" work for addToOrder method.
		this.state = {
			// Creates initial state for fish and order.
			fishes: {},
			order: {},
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

	addToOrder(key) {
		// 1. Take a copy of our current state.
		const order = {...this.state.order}; // Copies original order state.
		// 2.  Update or Add the new number of fish ordered.
		order[key] = order[key] + 1 || 1; //Checks if fish is already being ordered and adds 1 to existing order -OR- adds 1 if new to the order.
		// 3. Updates order state.
		this.setState({ order }) // -OR- ({ order: order })

	}

	render() {
		return ( 
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market"/>
					<ul className="list-of-fishes">
						{
							Object
								.keys(this.state.fishes) // Creates an array of fish objects.
								.map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)// iterates through each fish object and adds a key attribute to each.
						}
					</ul>
				</div>
				<Order fishes={this.state.fishes} order={this.state.order} />
				<Inventory addFish={this.addFish} loadSamples={this.loadSamples} addToOrder={this.addToOrder} />
			</div>
			)
	}
}

export default App; // 