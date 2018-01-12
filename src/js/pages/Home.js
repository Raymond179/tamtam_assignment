import React from 'react';

import Slider from '../components/Slider';
import Intro from '../components/Intro';
import Feed from '../components/Feed';

export default class Home extends React.Component {
	render() {
		return (
			<div>
				<Slider />
				<Intro />
				<Feed />
			</div>
		);
	}
}