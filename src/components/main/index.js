import React, { Component } from 'react';
import Header from '../header';
import Form from '../form';

class Main extends Component {
	render() {
		return (
			<div>
				<Header />
				<div className="container">
					<Form />
				</div>
			</div>
		);
	}
}

export default Main;
