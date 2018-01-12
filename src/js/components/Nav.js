import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends React.Component {

	render() {
		return (
			<nav ref="nav">
				<ul>
					<li>
						<NavLink onClick={this.props.menuController} exact to="/"> Home </NavLink>
					</li>
					<li>
						<NavLink onClick={this.props.menuController} to="/people"> People </NavLink>
					</li>
					<li>
						<NavLink onClick={this.props.menuController} to="/contact"> Contact </NavLink>	
					</li>
				</ul>						
			</nav>
		);
	}
}