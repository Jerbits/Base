import React from 'react';
import Navigation from './components/Navigation';
import Body from './components/Body';
import Footer from './components/Footer';

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