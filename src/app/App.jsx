import React from 'react';
import sample from 'images/index'

const hello = () => {
	return(
		<div>
			<img src={sample} alt=""/>
			<h1>Bootstrap starter template</h1>
        <p className="lead">Use this document as a way to quickly start any new project.<br /> All you get is this text and a mostly barebones HTML document.</p>
		</div>
	)
}

export default hello;