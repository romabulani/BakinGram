import { configureStore } from "@reduxjs/toolkit";
import { authenticationReducer } from "features";

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
  },
});
