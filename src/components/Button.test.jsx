import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders Button component', () => {
  const { getByText } = render(<Button label="Click Me" onClick={() => {}} />);
  expect(getByText('Click Me')).toBeInTheDocument();
});

test('handles onClick event', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button label="Click Me" onClick={handleClick} />);
  fireEvent.click(getByText('Click Me'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
