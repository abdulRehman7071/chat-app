import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "loginReducer",
  initialState: {
    value: "",
  },
  reducers: {
    login: (state, userName) => {
      state.value = userName;
    },
    logout: (state) => {
      state.value = "null";
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
