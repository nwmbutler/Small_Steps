import React from 'react';
import ReactDOM from 'react-dom';

import './style/index.css';
import Home from './components/Home';
import * as serviceWorker from './serviceWorker';

import App from './components/App';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
