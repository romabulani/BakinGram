import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { logoutUser } from "features";
import {
  addPostToServer,
  deletePostFromServer,
  editPostInServer,
  getAllPostsFromServer,
} from "services";

export const getPosts = createAsyncThunk(
  "/posts/getAllPosts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllPostsFromServer();

      return response.data.posts;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const addPost = createAsyncThunk(
  "/posts/addPost",
  async ({ postData, authToken }, { rejectWithValue }) => {
    try {
      const response = await addPostToServer(postData, authToken);
      return response.data.posts;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const editPost = createAsyncThunk(
  "/posts/addPost",
  async ({ postData, authToken }, { rejectWithValue }) => {
    try {
      const response = await editPostInServer(postData, authToken);
      return response.data.posts;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const deletePost = createAsyncThunk(
  "/posts/deletePost",
  async ({ postId, authToken }, { rejectWithValue }) => {
    try {
      const response = await deletePostFromServer(postId, authToken);
      return response.data.posts;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    userPosts: [],
    postError: null,
  },
  reducers: {},
  extraReducers: {
    [logoutUser]: (state) => {
      state.users = [];
    },
    [getPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.postError = action.payload;
    },
    [addPost.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [addPost.rejected]: (state, action) => {
      state.postError = action.payload;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [deletePost.rejected]: (state, action) => {
      state.postError = action.payload;
    },
    [editPost.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [editPost.rejected]: (state, action) => {
      state.postError = action.payload;
    },
  },
});

export const postsReducer = postsSlice.reducer;
