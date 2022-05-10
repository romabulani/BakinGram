import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { editUser, postLoginData, postSignupData } from "services";

export const loginUser = createAsyncThunk(
  "authenticate/loginUser",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const loginResponse = await postLoginData(username, password);
      return loginResponse.data;
    } catch (error) {
      toast.error(`Incorrect username or password`);
      return rejectWithValue(error);
    }
  }
);

export const signupUser = createAsyncThunk(
  "authenticate/signupUser",
  async (userDetails, { rejectWithValue }) => {
    try {
      const signupResponse = await postSignupData(userDetails);
      return signupResponse.data;
    } catch (error) {
      toast.error(`Couldn't Signup! Please try again.`);
      return rejectWithValue(error.response.data);
    }
  }
);

export const editUserProfile = createAsyncThunk(
  "authenticate/editUserProfile",
  async ({ userDetails, authToken }, { rejectWithValue }) => {
    try {
      const resp = await editUser(userDetails, authToken);
      return resp.data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  authToken: localStorage.getItem("authToken") ?? "",
  authUser: JSON.parse(localStorage.getItem("authUser")) ?? {},
  authStatus: "idle",
  authError: null,
  editProfileStatus: "idle",
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    logoutUser: (state) => {
      localStorage.removeItem("authToken");
      localStorage.removeItem("authUser");
      state.authToken = null;
      state.authUser = null;
      state.authStatus = "idle";
      state.authError = null;
      toast.success("Logout successful");
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.authStatus = "pending";
    },
    [loginUser.fulfilled]: (state, action) => {
      state.authStatus = "fulfilled";
      state.authToken = action.payload.encodedToken;
      state.authUser = action.payload.foundUser;
      localStorage.setItem("authToken", state.authToken);
      localStorage.setItem("authUser", JSON.stringify(state.authUser));
    },
    [loginUser.rejected]: (state, action) => {
      state.authStatus = "Error";
      state.authError = action.payload;
    },
    [signupUser.pending]: (state) => {
      state.authStatus = "pending";
    },
    [signupUser.fulfilled]: (state, action) => {
      state.authStatus = "fulfilled";
      state.authToken = action.payload.encodedToken;
      state.authUser = action.payload.createdUser;
      localStorage.setItem("authToken", state.authToken);
      localStorage.setItem("authUser", JSON.stringify(state.authUser));
    },
    [editUserProfile.pending]: (state, action) => {
      state.editProfileStatus = "pending";
    },
    [editUserProfile.fulfilled]: (state, action) => {
      state.authUser = action.payload.user;
    },
    [editUserProfile.rejected]: (state, action) => {
      state.authError = action.payload;
    },
  },
});
export const authenticationReducer = authenticationSlice.reducer;
export const { logoutUser } = authenticationSlice.actions;
