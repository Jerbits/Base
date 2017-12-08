import './assets/stylesheets/styles.scss';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.jsx';
if (process.env.NODE_ENV !== 'production') {
	console.log("true");
  require('../build/index.html');
}

ReactDOM.render(<App />, document.getElementById("root"));