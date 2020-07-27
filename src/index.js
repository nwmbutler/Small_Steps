import React from 'react';
import ReactDOM from 'react-dom';

import './style/index.css';
import Home from './components/Home';
import * as serviceWorker from './serviceWorker';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
