import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { logoutUser } from "features";
import { getAllPostsOfUserFromServer, getUser } from "services";

export const loadUserDetails = createAsyncThunk(
  "/profile/loadUserDetails",
  async (username, { rejectWithValue }) => {
    try {
      const response = await getUser(username);
      return response.data.user;
    } catch (error) {
      console.error(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const loadUserPosts = createAsyncThunk(
  "/profile/loadUserPosts",
  async (username, { rejectWithValue }) => {
    try {
      const response = await getAllPostsOfUserFromServer(username);
      return response.data.posts;
    } catch (error) {
      console.error(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profileDetails: null,
    postsDetails: [],
  },
  reducers: {},
  extraReducers: {
    [logoutUser]: (state) => {
      state.profileDetails = null;
      state.postsDetails = [];
    },
    [loadUserDetails.fulfilled]: (state, action) => {
      state.profileDetails = action.payload;
    },
    [loadUserDetails.rejected]: (state, action) => {
      console.error(action.payload);
    },
    [loadUserPosts.fulfilled]: (state, action) => {
      state.postsDetails = action.payload;
    },
    [loadUserPosts.rejected]: (state, action) => {
      console.error(action.payload);
    },
  },
});

export const profileReducer = profileSlice.reducer;
export const { resetProfile } = profileSlice.actions;
