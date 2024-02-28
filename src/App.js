import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import './App.css';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Layout/> }>
    <Route index element={ <PostList/> }/>
  </Route>
));

export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}