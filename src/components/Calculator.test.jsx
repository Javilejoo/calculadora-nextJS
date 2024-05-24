import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

test('renders Calculator component', () => {
  const { getByText } = render(<Calculator />);
  expect(getByText('0')).toBeInTheDocument();
});

test('performs subtraction', () => {
  const { getByText } = render(<Calculator />);
  fireEvent.click(getByText('5'));
  fireEvent.click(getByText('-'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByText('2')).toBeInTheDocument();
});

test('performs addition', () => {
  const { getByText } = render(<Calculator />);
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));
  expect(getByText('3')).toBeInTheDocument();
});

test('performs multiplication', () => {
  const { getByText } = render(<Calculator />);
  fireEvent.click(getByText('4'));
  fireEvent.click(getByText('*'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByText('12')).toBeInTheDocument();
});

test('performs division', () => {
  const { getByText } = render(<Calculator />);
  fireEvent.click(getByText('8'));
  fireEvent.click(getByText('/'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));
  expect(getByText('4')).toBeInTheDocument();
});

test('clears the display', () => {
  const { getByText } = render(<Calculator />);
  fireEvent.click(getByText('8'));
  fireEvent.click(getByText('C'));
  expect(getByText('0')).toBeInTheDocument();
});
