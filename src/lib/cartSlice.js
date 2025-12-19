import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const exist = state.cartItems.find((i) => i.id === item.id);

      if (exist) {
        exist.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalPrice += item.price;
    },
    removeCart: (state, action) => {
        state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
    },
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (i) => i.id === action.payload
      );

      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += item.price;
      }
    },

    
  },
});

export const {
  addToCart,removeCart,increaseQuantity} = cartSlice.actions;

export default cartSlice.reducer;
