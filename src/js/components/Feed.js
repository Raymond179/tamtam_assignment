import React from 'react';
import axios from 'axios';

import Post from './Post';

export default class Feed extends React.Component {
	constructor() {
		super();
		this.state = {
			feed: [
				{
					images: {
						standard_resolution: {
							url: null
						}
					},
					caption: {
						text: null
					}
				}
			],
			limitReached: false,
			getData: {
				accessToken: '300972848.78d0565.deded66c81874c5b95b70bf10067d12e',
				count: 6,
				userId: '562099325'
			},
			popup: {
				images: {
					standard_resolution: null
				},
				user: {
					username: null,
					profile_picture: null
				},
				caption: {
					text: null
				},
				likes: {
					count: null
				}
			},
			showPopup: false
		}
	}
	componentWillMount() {
		const accessToken = this.state.getData.accessToken;
		const count = this.state.getData.count;
		const userId = this.state.getData.userId;

		axios.get('https://api.instagram.com/v1/users/'+userId+'/media/recent/?count='+count+'&access_token='+accessToken)
			.then((response) => {
				this.setState({feed: response.data.data});
			})
			.catch((err) => {
				alert(err);
			})
	}
	loadPosts(e) {
		const button = e.target;
		button.classList.add('loading');

		const max_id = this.state.feed[this.state.feed.length - 1].id;
		const accessToken = this.state.getData.accessToken;
		const count = this.state.getData.count;
		const userId = this.state.getData.userId;

		axios.get('https://api.instagram.com/v1/users/'+userId+'/media/recent/?count='+count+'&max_id='+max_id+'&access_token='+accessToken)
			.then((response) => {
				let newData = response.data.data;
				let data = [ ...this.state.feed, ...newData ];

				this.setState({feed: data});
				button.classList.remove('loading');

				if(this.state.feed.length == 18) {
					this.setState({limitReached: true});
				}
			})
			.catch((err) => {
				alert(err);
				button.classList.remove('loading');
			})
		
	}
	hidePopup() {
		this.setState({showPopup: false});
	}
	feedPopup(id) {
		let feed = this.state.feed;
		let post = feed.filter(function(obj) {
			return obj.id == id;
		});
		this.setState({popup: post[0], showPopup: true});
	}
	render() {
		let feed = this.state.feed.map((post, i) =>
			<Post click={this.feedPopup.bind(this)} key={i} id={post.id} image={post.images.standard_resolution.url} text={post.caption} />
		)
		return (
			<section className="feed">
				<div className="padding">
					<article className="wrapper">
						<h2> Follow us on Instagram </h2>
						<h3> @tamtamnl </h3>
						<section className="feed-content">
							{feed}
						</section>
						{!this.state.limitReached ? 
							<button className="feed-button" onClick={this.loadPosts.bind(this)}> Load more </button>
						: null }
					</article>
				</div>
				{this.state.showPopup ? 
					<article className="feed-popup">
						<div className="overlay" onClick={this.hidePopup.bind(this)}></div>
						<div className="container">
							<div className="content">
								<section className="image" style={{backgroundImage: "url(" + this.state.popup.images.standard_resolution.url + ")"}}></section>
								<section className="infobox">
									<button className="cross" onClick={this.hidePopup.bind(this)}>
										<svg viewBox="0 0 23.335 23.335" enableBackground="new 0 0 23.335 23.335" xmlSpace="preserve">
											<path d="M13.789,11.667l9.546,9.546l-2.122,2.122l-9.546-9.546l-9.546,9.546L0,21.213l9.546-9.546L0,2.121L2.121,0l9.546,9.546
												L21.213,0l2.122,2.121L13.789,11.667z"/>
										</svg>
									</button>
									<article className="user">
										<img src={this.state.popup.user.profile_picture} />
										<span className="username"> {this.state.popup.user.username} </span>
									</article>
									<article className="text">
										<span>{this.state.popup.caption.text}</span>
									</article>
									<article className="likes">
										<span>{this.state.popup.likes.count} likes</span>
									</article>
								</section>
							</div>
						</div>
					</article>
				: null }
			</section>
		);	
	}
}