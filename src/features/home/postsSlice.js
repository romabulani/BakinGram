import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { logoutUser } from "features";
import {
  addPostToServer,
  deletePostFromServer,
  editPostInServer,
  getAllPostsFromServer,
  likePostInServer,
  dislikePostInServer,
  addCommentToPostInServer,
  editCommentInServer,
  deleteCommentFromServer,
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
  "/posts/editPost",
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

export const likePost = createAsyncThunk(
  "/posts/likePost",
  async ({ postId, authToken }, { rejectWithValue }) => {
    try {
      const response = await likePostInServer(postId, authToken);
      return response.data.posts;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const dislikePost = createAsyncThunk(
  "/posts/dislikePost",
  async ({ postId, authToken }, { rejectWithValue }) => {
    try {
      const response = await dislikePostInServer(postId, authToken);
      return response.data.posts;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const addComment = createAsyncThunk(
  "/posts/addComment",
  async ({ postId, commentData, authToken }, { rejectWithValue }) => {
    try {
      const response = await addCommentToPostInServer(
        postId,
        commentData,
        authToken
      );
      return response.data.posts;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const editComment = createAsyncThunk(
  "/posts/editComment",
  async (
    { postId, commentId, commentData, authToken },
    { rejectWithValue }
  ) => {
    try {
      const response = await editCommentInServer(
        postId,
        commentId,
        commentData,
        authToken
      );
      return response.data.posts;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const deleteComment = createAsyncThunk(
  "/posts/deleteComment",
  async ({ postId, commentId, authToken }, { rejectWithValue }) => {
    try {
      const response = await deleteCommentFromServer(
        postId,
        commentId,
        authToken
      );
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
    postStatus: "idle",
    postError: null,
  },
  reducers: {},
  extraReducers: {
    [logoutUser]: (state) => {
      state.posts = [];
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
    [likePost.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.postStatus = "fulfilled";
    },
    [likePost.pending]: (state, action) => {
      state.postStatus = "pending";
    },
    [likePost.rejected]: (state, action) => {
      state.postError = action.payload;
      state.postStatus = "idle";
    },
    [dislikePost.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.postStatus = "fulfilled";
    },
    [dislikePost.pending]: (state, action) => {
      state.postStatus = "pending";
    },
    [dislikePost.rejected]: (state, action) => {
      state.postError = action.payload;
      state.postStatus = "idle";
    },
    [addComment.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.postStatus = "fulfilled";
    },
    [addComment.pending]: (state, action) => {
      state.postStatus = "pending";
    },
    [addComment.rejected]: (state, action) => {
      state.postError = action.payload;
      state.postStatus = "idle";
    },
    [editComment.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.postStatus = "fulfilled";
    },
    [editComment.pending]: (state, action) => {
      state.postStatus = "pending";
    },
    [editComment.rejected]: (state, action) => {
      state.postError = action.payload;
      state.postStatus = "idle";
    },
    [deleteComment.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.postStatus = "fulfilled";
    },
    [deleteComment.pending]: (state, action) => {
      state.postStatus = "pending";
    },
    [deleteComment.rejected]: (state, action) => {
      state.postError = action.payload;
      state.postStatus = "idle";
    },
  },
});

export const postsReducer = postsSlice.reducer;
