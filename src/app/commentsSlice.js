import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCommentsByPermalink } from "../utils/utils";

export const fetchComments = createAsyncThunk(
  "comments/getComments",
   async (permalink, thunkAPI) => {
    const commentsData = await fetchCommentsByPermalink(permalink);//.then((resp)=>resp.json()).catch((err)=>console.log(err));
    // alert(commentsData);
    return commentsData;
    // const json = await response.json();
    // const data = await fetchComments(searchTerm);
    // return data;
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
    isLoading: true,
    hasError: false
  },
  //reducers: {// DO NOT USE BUILDER NOTATION FOR REDUCERS
  extraReducers: (builder) => {// DO USE BUILDER NOTATION FOR EXTRAREDUCERS
    builder
      .addCase(fetchComments.pending, (state) => { 
        state.isLoading=true;
        state.hasError=false;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.isLoading=false;
        state.hasError=false;
        state.comments=action.payload;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.isLoading=false;
        state.hasError=true;
      })
  },
});

export const commentsSelector = (state) => state.comments.comments;
export const isLoadingSelector = (state) => state.comments.isLoading;
export const hasErrorSelector = (state) => state.comments.hasError;
export default commentsSlice.reducer;