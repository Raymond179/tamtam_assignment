import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Slide extends React.Component {
	triggerPrev() {
		document.querySelector('.control-prev').click();
	}
	triggerNext() {
		document.querySelector('.control-next').click();
	}
	render() {
		return (
			<article className="slide" style={{backgroundImage: "url(" + this.props.image + ")"}}>
				<div className="overlay">
					<div className="slide-container">
						<h1> {this.props.title} </h1>
						<nav>
							<button className="arrow" onClick={this.triggerPrev.bind(this)}>
								<svg width="8px" height="12.061px" viewBox="0 0 8 12.061" enableBackground="new 0 0 8 12.061" xmlSpace="preserve">
									<path fill="#FFFFFF" d="M0.678,7.018c0,0-0.678-0.527-0.678-0.987c0-0.44,0.678-0.988,0.678-0.988l0.01-0.01l5.381-4.772
										c0.44-0.348,1.162-0.348,1.602,0c0.439,0.348,0.439,0.918,0,1.266L3.165,6.03l4.505,4.503c0.439,0.35,0.439,0.918,0,1.267
										c-0.439,0.348-1.16,0.348-1.602,0L0.688,7.027L0.678,7.018"/>
								</svg>
							</button>

							<a href={this.props.link} target="_blank" className="radius-button">View case</a>

							<button className="arrow" onClick={this.triggerNext.bind(this)}>
								<svg width="8px" height="12.061px" viewBox="0 0 8 12.061" enableBackground="new 0 0 8 12.061" xmlSpace="preserve">
									<path fill="#FFFFFF" d="M7.322,7.018c0,0,0.678-0.527,0.678-0.987c0-0.44-0.678-0.988-0.678-0.988l-0.01-0.01L1.932,0.261
										c-0.44-0.348-1.162-0.348-1.602,0c-0.439,0.348-0.439,0.918,0,1.266L4.835,6.03L0.33,10.533c-0.439,0.35-0.439,0.918,0,1.267
										c0.439,0.348,1.16,0.348,1.602,0l5.381-4.773L7.322,7.018"/>
								</svg>
							</button>
						</nav>
					</div>
				</div>
			</article>
		);	
	}
}