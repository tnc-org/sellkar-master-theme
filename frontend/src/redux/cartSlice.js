
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      
      // Ensure quantity is a number
      const quantity = Number(action.payload.quantity) || 1;
      
      if (existingItem) {
        // Add the new quantity to existing quantity
        existingItem.quantity = Number(existingItem.quantity) + quantity;
      } else {
        // Add new item to cart with quantity as number
        state.items.push({
          ...action.payload,
          quantity: quantity
        });
      }
    },
    
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity = Number(item.quantity) + 1;
      }
    },
    
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && Number(item.quantity) > 1) {
        item.quantity = Number(item.quantity) - 1;
      }
    },
    
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { 
  addToCart, 
  removeFromCart, 
  incrementQuantity, 
  decrementQuantity, 
  clearCart 
} = cartSlice.actions;

export default cartSlice.reducer;