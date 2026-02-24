import { render, screen } from '@testing-library/react';
import Header from './components/Header';

test('Renders the Little Lemon logo in the Header', () => {
  render(<Header />);
  expect(screen.getByAltText('Little Lemon Logo')).toBeInTheDocument();
});
