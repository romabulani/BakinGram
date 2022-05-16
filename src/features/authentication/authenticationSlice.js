import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  addBookmarkInServer,
  editUser,
  postLoginData,
  postSignupData,
  removeBookmarkFromServer,
} from "services";

export const loginUser = createAsyncThunk(
  "authenticate/loginUser",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const loginResponse = await postLoginData(username, password);
      return loginResponse.data;
    } catch (error) {
      toast.error(`Incorrect username or password`);
      console.error(error.response.data);
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
      toast.error(`Couldn't Signup! Please try again.`);
      console.error(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const editUserProfile = createAsyncThunk(
  "authenticate/editUserProfile",
  async ({ userDetails, authToken }, { rejectWithValue }) => {
    try {
      const resp = await editUser(userDetails, authToken);
      return resp.data.user;
    } catch (error) {
      toast.error("Couldn't Edit Profile! Please try again.");
      console.error(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const addBookmark = createAsyncThunk(
  "authenticate/addBookmark",
  async ({ postId, authToken }, { rejectWithValue }) => {
    try {
      const resp = await addBookmarkInServer(postId, authToken);
      return resp.data.bookmarks;
    } catch (error) {
      toast.error("Couldn't Add to Bookmarks.");
      console.error(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const removeBookmark = createAsyncThunk(
  "authenticate/removeBookmark",
  async ({ postId, authToken }, { rejectWithValue }) => {
    try {
      const resp = await removeBookmarkFromServer(postId, authToken);
      return resp.data.bookmarks;
    } catch (error) {
      toast.error("Couldn't remove from Bookmarks.");
      console.error(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  authToken: localStorage.getItem("authToken") ?? "",
  authUser: JSON.parse(localStorage.getItem("authUser")) ?? {},
  authStatus: "idle",
  authError: null,
  editProfileStatus: "idle",
  bookmarkStatus: "idle",
  bookmarkError: null,
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
      state.authUser = action.payload;
    },
    [editUserProfile.rejected]: (state, action) => {
      state.authError = action.payload;
    },
    [addBookmark.pending]: (state, action) => {
      state.bookmarkStatus = "pending";
    },
    [addBookmark.fulfilled]: (state, action) => {
      state.authUser.bookmarks = action.payload;
      state.bookmarkStatus = "fulfilled";
    },
    [addBookmark.rejected]: (state, action) => {
      state.bookmarkStatus = "rejected";
      state.bookmarkError = action.payload;
    },
    [removeBookmark.pending]: (state, action) => {
      state.bookmarkStatus = "pending";
    },
    [removeBookmark.fulfilled]: (state, action) => {
      state.authUser.bookmarks = action.payload;
      state.bookmarkStatus = "fulfilled";
    },
    [removeBookmark.rejected]: (state, action) => {
      state.bookmarkStatus = "rejected";
      state.bookmarkError = action.payload;
    },
  },
});
export const authenticationReducer = authenticationSlice.reducer;
export const { logoutUser } = authenticationSlice.actions;
