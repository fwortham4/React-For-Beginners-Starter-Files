import React from 'react';
import AddFishForm from './AddFishForm';
import { formatPrice } from '../helpers';
import base from '../base'; 

class Inventory extends React.Component {
	constructor() {
		super();
		this.renderInventory = this.renderInventory.bind(this);
		this.renderLogin = this.renderLogin.bind(this);
		this.authenticate = this.authenticate.bind(this);
		this.authHandler = this.authHandler.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			uid: null,
			owner: null
		}
	}

// Life Cycle Hooks:
	componentDidMount() {
		base.onAuth((user) => {
			// Immediately checks if there is a user once the page loads.
			if(user) {
				this.authHandler(null, { user });
			}
		});
	}

// Custom Methods:
	handleChange(e, key ) {
		const fish = this.props.fishes[key];
		// console.log(fish);
		// Copy fish and then update with new data.
		const updatedFish = {
			...fish, // ES6 spreading/overlaying
			[e.target.name]:  e.target.value //selects the name attribute and changes the value attribute.
		}
		this.props.updateFish(key, updatedFish);
	}

	authenticate(provider) {
		console.log(`Trying to loggin with ${provider}`);
		base.authWithOAuthPopup(provider, this.authHandler);
	}

	authHandler(err, authData) {
		console.log(authData);
		if(err) {
			console.error(err);
			return;
		}

		// Grab the store info.
		const storeRef = base.database().ref(this.props.storeId) // .database() = Allows us to access Firebase directly. .ref() = Specifies which part of the db we need. 

		// Query Firebase once for store data.
		storeRef.once('value', (snapshot) => {
			const data = snapshot.val() || {};

			// Set owner as our own if no owner already.
			if(!data.owner) {
				storeRef.set({
					owner: authData.user.uid
				});
			}

			// Sets the state locally for application.
			this.setState({
				uid: authData.user.uid,
				owner: data.owner || authData.user.uid
			});
		});

	}

	renderLogin() {
		return(
			<nav className="login">
				<h2>Inventory</h2>
				<p>Sign in to manage your store's inventory.</p>
				<button className="facebook" onClick={() => this.authenticate('facebook')}>Login with Facebook</button>
				<button className="twitter" onClick={() => this.authenticate('twitter')}>Login with Twitter</button>
			</nav>
		)
	}

	renderInventory(key) {
		const fish = this.props.fishes[key];
		return (
			<div className="fish-edit" key={key}>
				<input type="text" name="name" value={fish.name} placeholder="Fish Name" onChange={(e) => this.handleChange(e, key)}/>
				<input type="text" name="price" value={formatPrice(fish.price)} placeholder="Fish Price" onChange={(e) => this.handleChange(e, key)}/>
				<select type="text" name="status" value={fish.status} placeholder="Fish Status" onChange={(e) => this.handleChange(e, key)}>
		 			<option value="available">Fresh!</option>
		 			<option value="unavailable">Sold Out!</option> 
				</select>
				<textarea type="text" name="desc" value={fish.desc} placeholder="Fish Desc" onChange={(e) => this.handleChange(e, key)}>
				</textarea>
				<input type="text" name="image" value={fish.image} placeholder="Fish Image" onChange={(e) => this.handleChange(e, key)}/>
				<button onClick={() => this.props.removeFish(key)}>Remove Fish</button>
			</div>
		)
	}

	render() {
		const logout = <button>Log Out!</button>;
		// Authentication - checks if a user is logged-in.
		if(!this.state.uid) {
			return <div>{this.renderLogin()}</div>
		}

		// Check if the user is the owner of the current store.
		if(this.state.uid !== this.state.owner) {
			return (
				<div>
					<p>Sorry you are NOT the owner of this store!</p>
					{logout}
				</div>
			)
		}

		return ( 
			<div>
			 	<h2>Inventory</h2>
			 	{logout}
			 	{Object.keys(this.props.fishes).map(this.renderInventory)}
			 	<AddFishForm addFish={this.props.addFish}/>
			 	<button onClick={this.props.loadSamples}>Load Sample Fishes!</button>
		 	</div>
		)
	}
}

Inventory.propTypes = {
	fishes: React.PropTypes.object.isRequired,
	removeFish: React.PropTypes.func.isRequired,
	addFish: React.PropTypes.func.isRequired,
	updateFish: React.PropTypes.func.isRequired,
	loadSamples: React.PropTypes.func.isRequired,
	storeId: React.PropTypes.string.isRequired,
}

export default Inventory;