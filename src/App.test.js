/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);

  const headerElement = screen.getByText(/Encoder/i);
  expect(headerElement).toBeInTheDocument();
});

test('switches between Encoder and Decoder modes', () => {
  render(<App />);

  const switchButton = screen.getByText(/Switch/i);
  fireEvent.click(switchButton);

  const headerElement = screen.getByText(/Decoder/i);
  expect(headerElement).toBeInTheDocument();
});

test('encodes and decodes input correctly', () => {
  render(<App />);

  // Type input
  const inputElement = screen.getByPlaceholderText(/Enter text.../i);
  fireEvent.change(inputElement, { target: { value: 'Test Input' } });

  // Click the Switch button to encode
  const switchButton = screen.getByText(/Switch/i);
  fireEvent.click(switchButton);

  // Check if the output is correct
  const outputElement = screen.getByText(/VGVzdCBJbnB1dA==/i);
  expect(outputElement).toBeInTheDocument();

  // Click the Switch button to decode
  fireEvent.click(switchButton);

  // Check if the output is correct
  const decodedOutputElement = screen.getByText(/Test Input/i);
  expect(decodedOutputElement).toBeInTheDocument();
});
