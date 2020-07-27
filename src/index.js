import React from 'react';
import ReactDOM from 'react-dom';

import './style/index.css';
import CalculateForm from './components/CalculateForm';
import * as serviceWorker from './serviceWorker';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <CalculateForm />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

