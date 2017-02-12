import React from 'react';
import { formatPrice } from '../helpers';

// Stateless Function - could be a component, but no changes will ever be made to the Header.
class Fish extends React.Component {
	 render () {

	 	const details = this.props.details; // Refactoring for li attributes.

	 	return (
			<li className="menu-fish">
				<img src={details.image} alt={details.name}/>
				<h3 className="fish-name">
					{details.name}
					<span className="price">{formatPrice(details.price)}</span>
				</h3>
				<p>{details.desc}</p>
				<button>Add To Order</button>
			</li>
	 	)
	 }
}

export default Fish;