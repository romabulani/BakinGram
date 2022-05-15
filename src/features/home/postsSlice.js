import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { logoutUser } from "features";
import { toast } from "react-toastify";
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
      console.error(error.response.data);
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
      console.error(error.response.data);
      toast.error("Could't add post! Try again");
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
      console.error(error.response.data);
      toast.error("Could't edit post! Try again");
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
      console.error(error.response.data);
      toast.error("Could't delete post! Try again");
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
      console.error(error.response.data);
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
      console.error(error.response.data);
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
      console.error(error.response.data);
      toast.error("Couldn't add comment!");
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
      console.error(error.response.data);
      toast.error("Couldn't edit comment!");
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
      console.error(error.response.data);
      toast.error("Couldn't delete comment!");
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
    likeDislikeStatus: "idle",
    commentStatus: "idle",
    postSorting: "default",
    postError: null,
  },
  reducers: {
    changeSorting: (state, action) => {
      state.postSorting = action.payload;
    },
  },
  extraReducers: {
    [logoutUser]: (state) => {
      state.posts = [];
    },
    [getPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.postStatus = "fulfilled";
    },
    [getPosts.pending]: (state, action) => {
      state.postStatus = "pending";
    },
    [getPosts.rejected]: (state, action) => {
      state.postError = action.payload;
      state.postStatus = "idle";
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
      state.likeDislikeStatus = "fulfilled";
    },
    [likePost.pending]: (state, action) => {
      state.likeDislikeStatus = "pending";
    },
    [likePost.rejected]: (state, action) => {
      state.postError = action.payload;
      state.likeDislikeStatus = "idle";
    },
    [dislikePost.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.likeDislikeStatus = "fulfilled";
    },
    [dislikePost.pending]: (state, action) => {
      state.likeDislikeStatus = "pending";
    },
    [dislikePost.rejected]: (state, action) => {
      state.postError = action.payload;
      state.likeDislikeStatus = "idle";
    },
    [addComment.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.commentStatus = "fulfilled";
    },
    [addComment.pending]: (state, action) => {
      state.commentStatus = "pending";
    },
    [addComment.rejected]: (state, action) => {
      state.postError = action.payload;
      state.commentStatus = "idle";
    },
    [editComment.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.commentStatus = "fulfilled";
    },
    [editComment.pending]: (state, action) => {
      state.commentStatus = "pending";
    },
    [editComment.rejected]: (state, action) => {
      state.postError = action.payload;
      state.commentStatus = "idle";
    },
    [deleteComment.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.commentStatus = "fulfilled";
    },
    [deleteComment.pending]: (state, action) => {
      state.commentStatus = "pending";
    },
    [deleteComment.rejected]: (state, action) => {
      state.postError = action.payload;
      state.commentStatus = "idle";
    },
  },
});

export const postsReducer = postsSlice.reducer;
export const { changeSorting } = postsSlice.actions;
