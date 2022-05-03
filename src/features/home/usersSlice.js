import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { logoutUser } from "features/authentication/authenticationSlice";
import { editUser, getAllUsers } from "services";

export const getUsers = createAsyncThunk("/users/getUsers", async () => {
  try {
    const suggestions = await getAllUsers();
    return suggestions.data.users;
  } catch (error) {
    console.error(error);
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {},
  extraReducers: {
    [logoutUser]: (state) => {
      state.users = [];
    },
    [getUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const usersReducer = usersSlice.reducer;