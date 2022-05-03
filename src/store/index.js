import { configureStore } from "@reduxjs/toolkit";
import { authenticationReducer, profileReducer, usersReducer } from "features";

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    users: usersReducer,
    profile: profileReducer,
  },
});
