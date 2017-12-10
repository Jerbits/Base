import React from 'react';
import Navigation from './Navigation';
import Body from './Body';
import Footer from './Footer';

const wrapper = props => {
	return(
		<div id="wrapper">
			<Navigation />
			<Body />
			<Footer />
		</div>
	)
}
export default wrapper;