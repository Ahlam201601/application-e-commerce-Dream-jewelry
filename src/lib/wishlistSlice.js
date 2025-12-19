import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlisteItems: [],
  total : 0
};

const wishlistSlice = createSlice({
    name: "wishliste",
    initialState,
    reducers:{
        addToWishliste: (state , action)=>{
            const exist = state.wishlisteItems.find((i)=> i.id === action.payload.id)
            console.log(exist);
            
            if(!exist){
                state.wishlisteItems.push({...action.payload})
                
            }
            state.total +=1
        }
        
    }

})
export const {addToWishliste} = wishlistSlice.actions;
export default wishlistSlice.reducer;