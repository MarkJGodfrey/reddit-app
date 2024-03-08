import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPostsBySearchTerm, searchResults } from "../utils/utils";
import { useDispatch } from "react-redux";

export const fetchPosts = createAsyncThunk(
  "posts/getPosts",
   async (searchTerm, thunkAPI) => {
    return fetchPostsBySearchTerm(searchTerm);//.then((resp)=>resp.json()).catch((err)=>console.log(err));
    // const json = await response.json();
    // const data = await fetchPosts(searchTerm);
    // return data;
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
  reducers: {// DO NOT USE BUILDER NOTATION FOR REDUCERS
      changeSearchTerm(state,action){
        state.searchTerm=action.payload;
      },
      // getPosts(state){ 
      //   state.isLoading=true;
      //   state.hasError=false;
      // },
      // savePosts(state, action){
      //   state.isLoading=false;
      //   state.hasError=false;
      //   state.posts=action.payload;
      // },
      // postsError(state){
      //   state.isLoading=false;
      //   state.hasError=true;
      // },
  },
  extraReducers: (builder) => {// DO USE BUILDER NOTATION FOR EXTRAREDUCERS
    builder
      .addCase(fetchPosts.pending, (state) => { 
        state.isLoading=true;
        state.hasError=false;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading=false;
        state.hasError=false;
        state.posts=action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.isLoading=false;
        state.hasError=true;
      })
  },
});

export const postsSelector = (state) => state.posts.posts;
export const searchTermSelector = (state) => state.posts.searchTerm;
export const { 
  changeSearchTerm,
  // getPosts,
  // savePosts,
  // postsError,
 } = postsSlice.actions;

// export const fetchPosts = (searchTerm) => async (dispatch) => {
//   try {
//     dispatch(getPosts());
//     alert('fetching posts');
//     const posts = await fetchPostsBySearchTerm(searchTerm);

//     // We are adding showingComments and comments as additional fields to handle showing them when the user wants to. We need to do this because we need to call another API endpoint to get the comments for each post.
//     const postsWithMetadata = posts.map((post) => ({
//       ...post,
//       showingComments: false,
//       comments: [],
//       loadingComments: false,
//       errorComments: false,
//     }));
//     dispatch(savePosts(postsWithMetadata));
//   } catch (error) {
//     dispatch(postsError());
//   }
// };
export default postsSlice.reducer;