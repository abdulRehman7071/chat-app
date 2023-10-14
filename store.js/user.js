import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsInCart: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItemsInCart(state, action) {
      state.itemsInCart = action.payload;
    },
    setTotalAmount(state, action) {
      state.totalAmount = action.payload;
    },
  },
});

export const { setItemsInCart, setTotalAmount } = cartSlice.actions;

export default cartSlice.reducer;
