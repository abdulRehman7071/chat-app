import userReducer from "@/store/user";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    login: userReducer,
  },
});
