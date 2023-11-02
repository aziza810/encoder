import { render, screen, fireEvent } from '@testing-library/react';
import InputForm from './index';

test('renders InputForm component', () => {
  render(<InputForm />);

  // Check if the component renders without crashing
  const textareaElement = screen.getByPlaceholderText(/Enter text.../i);
  expect(textareaElement).toBeInTheDocument();
});

test('calls onChange function when input changes', () => {
  const mockOnChange = jest.fn();
  render(<InputForm onChange={mockOnChange} />);

  // Simulate user input
  const textareaElement = screen.getByPlaceholderText(/Enter text.../i);
  fireEvent.change(textareaElement, { target: { value: 'Test Input' } });

  // Check if onChange function was called
  expect(mockOnChange).toHaveBeenCalledWith('Test Input');
});
