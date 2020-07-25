import React from 'react';
import { render } from '@testing-library/react';
import CalculateForm from './CalculateForm';

test('renders Calculate button', () => {
  const { getByText } = render(<CalculateForm/>);
  const linkElement = getByText('Calculate');
  expect(linkElement).toBeInTheDocument();
});
