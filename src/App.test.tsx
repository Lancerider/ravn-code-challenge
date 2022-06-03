import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders the header title', () => {
  render(<App />);
  const headerTitle = screen.getByText(/People of Star Wars|Ravn Star Wars Registry/i);
  expect(headerTitle).toBeInTheDocument();
});
