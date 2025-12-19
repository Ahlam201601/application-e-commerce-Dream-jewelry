import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import wishlisteReducer from "./wishlistSlice"

export const store = configureStore({
    reducer : {
        cart : cartReducer ,
        wishliste : wishlisteReducer,
    }
});
export default store;