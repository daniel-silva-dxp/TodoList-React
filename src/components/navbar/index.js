import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const Navbar = () => {
	return (
		<nav className="navbar navbar-dark">
			<ul className="container">
				<li className="nav-item">
					<Link to="/">Home</Link>
				</li>
				<li className="nav-item">
					<Link to="/status">Status</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
