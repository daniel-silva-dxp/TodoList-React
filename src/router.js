import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/navbar';
import PgErro from './pages/erro';

const Routes = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/status" component={PgErro} />>
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
