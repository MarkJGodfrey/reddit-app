import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../app/postsSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
