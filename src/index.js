import React from 'react';
import ReactDOM from 'react-dom';

import './style/index.css';
import CalculateForm from './components/CalculateForm';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <CalculateForm />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

