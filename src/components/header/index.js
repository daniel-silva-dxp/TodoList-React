import React from 'react';
import office from '../../assets/office.svg';

import './index.css';
import SocialIcons from '../social-icons';

const Header = () => {
	return (
		<header>
			<div className="container">
				<div className="content">
					<div className="wrapper">
						<h1>TodoList</h1>
						<h4>
							Desenvolvido por <strong>Daniel Silva</strong>
						</h4>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque nostrum quos corrupti
							voluptate rerum, dolorem odit fugit pariatur harum enim doloribus aspernatur deleniti
							numquam hic obcaecati ab aliquid dolores expedita.
						</p>
                        <SocialIcons />
					</div>
					<img src={office} alt="404 - Dev" />
				</div>
			</div>
		</header>
	);
};

export default Header;
