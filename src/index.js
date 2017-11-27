import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import '../node_modules/bulma/css/bulma.css';
import App from './components/App';

ReactDOM.render(
  <App/>
  , document.getElementById('app'));
