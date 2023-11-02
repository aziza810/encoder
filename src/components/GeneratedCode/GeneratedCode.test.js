import { render, screen } from '@testing-library/react';
import GeneratedCode from './index';

test('renders GeneratedCode component', () => {
  render(<GeneratedCode />);

  // Check if the component renders without crashing
  const generatedCodeElement = screen.getByText(/Generated Code/i);
  expect(generatedCodeElement).toBeInTheDocument();
});
