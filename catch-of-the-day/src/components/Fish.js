import React from 'react';
import { formatPrice } from '../helpers';

// Stateless Function - could be a component, but no changes will ever be made to the Header.
class Fish extends React.Component {
	 render () {

	 	const { details, index } = this.props; // Refactoring for li attributes.
	 	const isAvailable = details.status === 'available';
	 	const buttonText = isAvailable ? 'Add to Order' : 'Sold Out!'

	 	return (
			<li className="menu-fish">
				<img src={details.image} alt={details.name}/>
				<h3 className="fish-name">
					{details.name}
					<span className="price">{formatPrice(details.price)}</span>
				</h3>
				<p>{details.desc}</p>
				<button onClick={() => this.props.addToOrder(index)} disabled={!isAvailable}>{buttonText}</button>
			</li>
	 	)
	 }
}

Fish.propTypes = {
	details: React.PropTypes.object.isRequired,
	index: React.PropTypes.string.isRequired,
	addToOrder: React.PropTypes.func.isRequired,
}

export default Fish;