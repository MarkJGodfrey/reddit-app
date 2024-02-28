import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../utils/utils";

export const loadPosts = createAsyncThunk(
  "posts/getPosts",
  async (searchTerm, thunkAPI) => {
    const data = await fetchPosts(searchTerm);
    const json = data;//await data.json();
    return json;
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    searchTerm: '',
    posts: [],
    isLoading: false,
    hasError: false
  },
  reducers: {
    'posts/changeSearchTerm': (state, action) => {
      state.searchTerm=action.payload;
    },
  },
  extraReducers: {
  [loadPosts.pending]: (state, action) => { 
    state.isLoading=true;
    state.hasError=false;
  },
  [loadPosts.fulfilled]: (state, action) => {
    state.isLoading=false;
    state.hasError=false;
    state.posts=action.payload;
  },
  [loadPosts.rejected]: (state, action) => {
    state.isLoading=false;
    state.hasError=true;
  }
}
});

export const PostsSelector = (state) => state.posts.posts;
export const searchTermSelector = (state) => state.reddit.searchTerm;
export const { changeSearchTerm } = postsSlice.actions;
export default postsSlice.reducer;