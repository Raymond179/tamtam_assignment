import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import css from '../css/main.scss';

import Layout from './pages/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import People from './pages/People';

ReactDOM.render(
	<Router>
		<Layout>
			<Route exact path="/" component={Home}> </Route>
			<Route path="/contact" component={Contact}> </Route>
			<Route path="/people" component={People}> </Route>
		</Layout>
	</Router>, 
	document.getElementById('app')
);