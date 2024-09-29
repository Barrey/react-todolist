import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Todo List heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Todo List/i);
  expect(headingElement).toBeInTheDocument();
});