import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { logoutUser } from "features";
import { getAllUsers } from "services";

export const getUsers = createAsyncThunk("/users/getUsers", async () => {
  try {
    const response = await getAllUsers();
    return response.data.users;
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
