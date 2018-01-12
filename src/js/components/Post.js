import React from 'react';

export default class Feed extends React.Component {
	render() {
		return (
			<article className="post" onClick={this.props.click.bind(this, this.props.id)}>
				<img src={this.props.image} alt="" />
				<section className="content">
					<p> 
						{this.props.text ? 
							this.props.text.text
						: null }
					</p>
				</section>
			</article>
		);	
	}
}