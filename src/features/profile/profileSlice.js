import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { logoutUser } from "features/authentication/authenticationSlice";
import { getUser } from "services";

export const loadUserDetails = createAsyncThunk(
  "/profile/loadUserDetails",
  async (username, { rejectWithValue }) => {
    try {
      const userProfile = await getUser(username);
      return userProfile.data.user;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profileDetails: null,
  },
  reducers: {},
  extraReducers: {
    [logoutUser]: (state) => {
      state.users = [];
    },
    [loadUserDetails.fulfilled]: (state, action) => {
      state.profileDetails = action.payload;
    },
    [loadUserDetails.rejected]: (state, action) => {
      console.error(action);
    },
  },
});

export const profileReducer = profileSlice.reducer;
