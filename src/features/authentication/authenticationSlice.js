import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { postLoginData, postSignupData } from "services";

export const loginUser = createAsyncThunk(
  "authenticate/loginUser",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const loginResponse = await postLoginData(username, password);
      return loginResponse;
    } catch (error) {
      return rejectWithValue(error.response.data);
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
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  authToken: localStorage.getItem("authToken") ?? "",
  authUser: JSON.parse(localStorage.getItem("authUser")) ?? {},
  authStatus: "idle",
  error: null,
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
      state.error = null;
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
      state.error = action.payload;
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
    [signupUser.rejected]: (state, action) => {
      state.authStatus = "Error";
      state.error = action.payload;
    },
  },
});
export const authenticationReducer = authenticationSlice.reducer;
export const { logoutUser } = authenticationSlice.actions;
