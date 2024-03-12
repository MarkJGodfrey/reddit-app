import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { userEvent } from '@testing-library/user-event';
import { store } from './app/store';
import App from './App';
import { searchResults } from './utils/utils';
import '@testing-library/jest-dom';

// const fetchPostsBySearchTerm = jest.fn(() => {
//   return  searchResults.data.children.map((child)=>child.data);
// });
it('displays r/19684 . posted by u/6ix3eet 4 months ago when a search is made', async()=>{
  render(
  <Provider store={store}>
    <App />
  </Provider>
  );
  
  const textbox = screen.getByRole('textbox');
  const button = screen.getByRole('button');
  userEvent.type(textbox, 'h');
  setTimeout(() => {
    userEvent.click(button);
  }, 250);

  const result = await screen.findByText(new RegExp(`r/19684 . posted by u/6ix3eet 4 months ago`, "i"),{timeout: 5000});
  expect(result).toBeInTheDocument();
})