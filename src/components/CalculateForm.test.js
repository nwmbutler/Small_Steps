import React from 'react';
import ReactDOM from 'react-dom';
import CalculateForm from './Home';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CalculateForm />, div);
});
