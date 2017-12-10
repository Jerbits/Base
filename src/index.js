import './assets/stylesheets/styles.scss';
import 'font-awesome/scss/font-awesome.scss';
import React from 'react';
import { render } from 'react-dom';
import App from './app/components/App';
if (process.env.NODE_ENV !== 'production') {
  require('../build/index.html');
}

render(<App />, document.getElementById("root"));