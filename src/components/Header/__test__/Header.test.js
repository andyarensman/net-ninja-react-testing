import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('should render same text passed into title prop', () => {
  render(<Header title="My Header"/>);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

// it('should render same text passed into title prop', () => {
//   render(<Header title="My Header"/>);
//   const headingElement = screen.getByRole("heading");
//   expect(headingElement).toBeInTheDocument();
// });

// it('header get by role with speicifc title', () => {
//   render(<Header title="My Header"/>);
//   const headingElement = screen.getByRole("heading", { name: "My Header"});
//   expect(headingElement).toBeInTheDocument();
// });
//
// //Find by
//
// it('header findybytext with async await', async () => {
//   render(<Header title="My Header"/>);
//   const headingElement = await screen.findByText(/my header/i);
//   expect(headingElement).toBeInTheDocument();
// });
//
// //Query by
//
// it('header is not dogs', async () => {
//   render(<Header title="My Header"/>);
//   const headingElement = screen.queryByText(/dogs/i);
//   expect(headingElement).not.toBeInTheDocument();
// });
// 
// //get all by
//
// it('header amount is equal to 1', async () => {
//   render(<Header title="My Header"/>);
//   const headingElement = screen.getAllByRole("heading");
//   expect(headingElement.length).toBe(1);
// });
