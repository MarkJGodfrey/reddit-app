import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ErrorPage from './components/ErrorPage/ErrorPage';
import PostList from './features/PostList/PostList';
import CommentList from './features/Comment/CommentList';
import './App.css';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Layout/> }>
    <Route index element={ <PostList/> }/>
    <Route path='search' element={ <PostList/> }/>
    <Route path='r/:subreddit/search' element={ <PostList/> }/>
    <Route path='error' element={ <ErrorPage/> }/>
    <Route path='r/:subreddit/comments/:id/:title/' element={ <CommentList/> }/>
  </Route>
));

export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}