import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {},
  reciver: {},
};

export const userSlice = createSlice({
  name: "loginReducer",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    setReciver: (state, action) => {
      state.reciver = action.payload;
    },
    logout: (state) => {
      state.user = "null";
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, setReciver } = userSlice.actions;

export default userSlice.reducer;
