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
      state.totalPrice += Number(item.price);
    },
    removeCart: (state, action) => {
        const exist = state.cartItems.find(
        (i) => i.id === action.payload
      );
      if(exist){
        state.totalQuantity -= exist.quantity;
        state.totalPrice -= Number(exist.price) * exist.quantity;
        state.cartItems = state.cartItems.filter((i)=> i.id !== action.payload)
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (i) => i.id === action.payload
      );

      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += Number(item.price);
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (i) => i.id === action.payload
      );

      if (item) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= Number(item.price);

        
        if (item.quantity === 0) {
          state.cartItems = state.cartItems.filter(
            (i) => i.id !== action.payload
          );
        }
      }
    },
  },
});

export const {
  addToCart,removeCart,increaseQuantity,decreaseQuantity} = cartSlice.actions;

export default cartSlice.reducer;
