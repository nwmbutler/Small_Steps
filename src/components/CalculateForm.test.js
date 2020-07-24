import React from 'react';
import ReactDOM from 'react-dom';
import CalculateForm from './CalculateForm';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CalculateForm />, div);
});