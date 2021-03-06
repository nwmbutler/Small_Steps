import React from 'react';
import ReactDOM from 'react-dom';

import './style/index.css';
import * as serviceWorker from './serviceWorker';
import Navbar from './components/Navbar';
import App from './components/App';

import Footer from './components/Footer';
ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
