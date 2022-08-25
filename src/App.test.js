import { render, screen } from '@testing-library/react';
import App from './App';

xtest('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("it works!");
  expect(linkElement).toBeInTheDocument();
});
test("renders data", () => {
  render()
})