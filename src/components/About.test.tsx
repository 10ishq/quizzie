// Write test cases for About component

import { render } from '@testing-library/react';
import About from './About';

test('About component renders correctly', () => {
  const { getByText } = render(<About />);
  expect(getByText('Hello world!')).toBeInTheDocument();
});