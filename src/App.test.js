import { render, screen } from '@testing-library/react';
import App from './App';

test('rendering h1 tag', () => {
  render(<App />);
  const linkElement = screen.getByText(/Todo Management System/i);
  expect(linkElement).toBeInTheDocument();
});
