import React from 'react';
import { NavLink } from 'react-router-dom';

import Nav from './Nav';

export default class Header extends React.Component {
	menuController() {
		const header = document.querySelector('header');
		header.classList.toggle('active');
	}
	closeMenu() {
		const header = document.querySelector('header');
		header.classList.remove('active');
	}
	render() {
		return (
			<header ref="header">
				<button className="hamburger" onClick={this.menuController.bind(this)}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</button>
				<NavLink onClick={this.closeMenu.bind(this)} to="/" className="tamtam-icon">
					<svg width="32px" height="32px" viewBox="0 0 32 32" enableBackground="new 0 0 32 32" xmlSpace="preserve">
						<polyline fill="#FFFFFF" points="6.4,32 0,25.601 25.6,0 32,6.402 6.4,32 "/>
					</svg>
				</NavLink>
				<Nav menuController={this.menuController} />
			</header>
		);
	}
}