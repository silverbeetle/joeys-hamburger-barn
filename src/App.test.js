import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders site header', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/JOEY'S HAMBURGER BARN/i);
  expect(linkElement).toBeInTheDocument();
});
