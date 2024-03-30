/*eslint-disable*/
import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: JSON.parse(localStorage.getItem("cart")) ?? [],
  reducers: {
    addToCart(state, action) {
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity directly
      } else {
        state.push(action.payload);
      }
        
    },
    deleteFromCart(state, action) {
      return state.filter((item) => item.id != action.payload.id);
    },
    updQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      return state.map(item =>
        item.id === id ? { ...item, quantity: parseInt(quantity)} : item
      );

    },
    ClearCart: (state,action)=>{
      return state=action.payload;
      
    }
  },
});

export const { addToCart, deleteFromCart,updQuantity,ClearCart } = CartSlice.actions;
export default CartSlice.reducer;
