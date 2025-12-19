import { createSlice } from "@reduxjs/toolkit";


const savedWishlist = JSON.parse(localStorage.getItem("wishliste")) || [];

const initialState = {
  wishlisteItems: savedWishlist,
  total: savedWishlist.length, 
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishliste: (state, action) => {
      const exist = state.wishlisteItems.find(
        (i) => i.id === action.payload.id
      );

      if (!exist) {
        state.wishlisteItems.push(action.payload);
        state.total += 1;

        // ✅ sync localStorage
        localStorage.setItem(
          "wishliste",
          JSON.stringify(state.wishlisteItems)
        );
      }
    },

    removeFromWishlist: (state, action) => {
      const exist = state.wishlisteItems.find(
        (i) => i.id === action.payload
      );

      if (exist) {
        state.wishlisteItems = state.wishlisteItems.filter(
          (i) => i.id !== action.payload
        );
        state.total -= 1;

        // ✅ sync localStorage
        localStorage.setItem(
          "wishliste",
          JSON.stringify(state.wishlisteItems)
        );
      }
    },

    clearWishlist: (state) => {
      state.wishlisteItems = [];
      state.total = 0;
      localStorage.removeItem("wishliste");
    },
  },
});

export const {
  addToWishliste,
  removeFromWishlist,
  clearWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
