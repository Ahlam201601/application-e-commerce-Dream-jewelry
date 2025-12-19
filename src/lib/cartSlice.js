import { createSlice } from "@reduxjs/toolkit";

// 🔹 jml data men localStorage
const savedCart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [], totalQuantity: 0, totalPrice: 0 };

const initialState = {
  cartItems: savedCart.cartItems,
  totalQuantity: savedCart.totalQuantity,
  totalPrice: savedCart.totalPrice,
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

      // ✅ sync localStorage
      localStorage.setItem("cart", JSON.stringify(state));
    },

    removeCart: (state, action) => {
      const exist = state.cartItems.find((i) => i.id === action.payload);
      if (exist) {
        state.totalQuantity -= exist.quantity;
        state.totalPrice -= Number(exist.price) * exist.quantity;
        state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);

        localStorage.setItem("cart", JSON.stringify(state));
      }
    },

    increaseQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += Number(item.price);

        localStorage.setItem("cart", JSON.stringify(state));
      }
    },

    decreaseQuantity: (state, action) => {
  const item = state.cartItems.find((i) => i.id === action.payload);
  if (item && item.quantity > 1) {  // ✅ seulement si quantity > 1
    item.quantity -= 1;
    state.totalQuantity -= 1;
    state.totalPrice -= Number(item.price);

    localStorage.setItem("cart", JSON.stringify(state));
  }
  },
    
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;

      localStorage.removeItem("cart");
    },
  },
});

export const { addToCart, removeCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
