import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import animateScrollTo from 'animated-scroll-to';

import Slide from './Slide';

export default class Slider extends React.Component {
	scrollTo() {
		animateScrollTo(document.querySelector('.intro'));
	}
	render() {
		return (
			<section className="slider">
				<Carousel showStatus={false} infiniteLoop showIndicators={false}>
					<Slide title="Walibi" image="../../img/slider/walibi.jpg" link='https://www.tamtam.nl/werk/walibi-holland/' />
					<Slide title="Oxxio" image="../../img/slider/oxxio.jpg" link='https://www.tamtam.nl/werk/oxxio/' />
					<Slide title="Florensis" image="../../img/slider/florensis.jpg" link='https://www.tamtam.nl/werk/florensis/' />
				</Carousel>
				<button onClick={this.scrollTo.bind(this)} className="scroll-down">
					<svg className="mouse" width="22px" height="34px" viewBox="0 0 22 34" enableBackground="new 0 0 22 34" xmlSpace="preserve">
						<path fill="#010101" d="M0,10.497C0,4.702,4.932,0,11,0c6.076,0,11,4.696,11,10.497v13.006C22,29.298,17.068,34,11,34
							C4.924,34,0,29.305,0,23.503V10.497z M2,10.497v13.006C2,28.2,6.029,32,11,32c4.96,0,9-3.805,9-8.497V10.497C20,5.8,15.971,2,11,2
							C6.04,2,2,5.804,2,10.497z M9,10.998C9,9.895,9.889,9,11,9c1.105,0,2,0.887,2,1.998v4.004c0.002,1.101-0.889,1.996-1.99,1.998
							c-0.003,0-0.006,0-0.01,0c-1.105,0-2-0.887-2-1.998V10.998z"/>
					</svg>

					<svg className="arrows-down" width="12.061px" height="17px" viewBox="0 0 12.061 17" enableBackground="new 0 0 12.061 17" xmlSpace="preserve">
						<path fill="#010101" d="M7.018,7.322c0,0-0.526,0.678-0.986,0.678c-0.44,0-0.988-0.678-0.988-0.678l-0.01-0.01l-4.772-5.38
							c-0.348-0.441-0.348-1.162,0-1.602c0.349-0.44,0.918-0.44,1.267,0L6.03,4.835l4.503-4.505c0.35-0.44,0.918-0.44,1.267,0
							c0.348,0.44,0.348,1.16,0,1.601L7.027,7.312L7.018,7.322L7.018,7.322z M7.018,16.322c0,0-0.526,0.678-0.986,0.678
							c-0.44,0-0.988-0.678-0.988-0.678l-0.01-0.01l-4.772-5.381c-0.348-0.441-0.348-1.162,0-1.602c0.349-0.44,0.918-0.44,1.267,0
							l4.503,4.505l4.503-4.505c0.35-0.44,0.918-0.44,1.267,0c0.348,0.439,0.348,1.16,0,1.602l-4.772,5.381L7.018,16.322L7.018,16.322z"/>
					</svg>
				</button>

				<svg className="chevron-down" width="12.062px" height="8px" viewBox="0 0 12.062 8" enableBackground="new 0 0 12.062 8" xmlSpace="preserve">
					<path fill="#FFFFFF" d="M5.043,7.322C5.043,7.322,5.57,8,6.029,8c0.441,0,0.988-0.678,0.988-0.678l0.01-0.01l4.772-5.38
						c0.349-0.441,0.349-1.162,0-1.602c-0.348-0.44-0.919-0.44-1.266,0L6.029,4.835L1.527,0.33c-0.35-0.44-0.918-0.44-1.266,0
						c-0.349,0.44-0.349,1.16,0,1.601l4.771,5.381L5.043,7.322"/>
				</svg>
			</section>
		);	
	}
}