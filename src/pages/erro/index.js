import React, { Component } from 'react';
import Message from '../../components/message';
import TagBodyMarkup from '../../components/html-tag-markup';
import ConstructImg from '../../components/construct';

import './index.css';

class PgErro extends Component {
	render() {
		return (
			<div className="pgErro">
				<div className="container">
					<TagBodyMarkup />
					<div className="content">
						<Message />
						<ConstructImg />
					</div>
				</div>
			</div>
		);
	}
}

export default PgErro;
