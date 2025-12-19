import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlisteItems: [],
  total : 0
};

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers:{
        addToWishliste: (state , action)=>{
            const exist = state.wishlisteItems.find((i)=> i.id === action.payload.id)
            console.log(exist);
            
            if(!exist){
                state.wishlisteItems.push({...action.payload})  
            }
            state.total +=1
        },
        removeFromWishlist: (state, action) => {
      state.wishlisteItems = state.wishlisteItems.filter(
        i => i.id !== action.payload
      );
    },

        
    }

})
export const {addToWishliste , removeFromWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;