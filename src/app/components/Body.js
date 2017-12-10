import React from 'react';
import sample from 'images/index';
import FA from 'react-fontawesome';

const Body = props => {
	return (
		<div className="container">
      <div className="starter-template">
				<div>
					<img src={sample} alt=""/>
					<h1>Bootstrap starter template</h1>
        	<p className="lead">Use this document as a way to quickly start any new project.<br /> All you get is this text and a mostly barebones HTML document.</p>
        	<h1 style={{textAlign:'center'}}>
						<FA name="rocket" size="2x" spin />
        	</h1>
				</div>
      </div>
    </div>
	)
}

export default Body;