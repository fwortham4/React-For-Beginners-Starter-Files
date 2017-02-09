import React from 'react';

// Stateless Function - could be a component, but no changes will ever be made to the Header.
function Header(props) {
	 return ( 
	 	<header className="top">
	 		<h1>
	 			Catch
	 			<span className="ofThe">
	 				<span className="of">of</span>
	 				<span className="the">the</span>
	 			</span>
	 			Day
	 		</h1>
	 		<h3 className="tagline">{props.tagline}</h3>
	 	</header>
	 )
}

export default Header;