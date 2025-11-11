import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;

      // Check if item already exists
      const existingItem = state.items.find(item => item.name === newItem.name);

      if (existingItem) {
        // If item exists, you could optionally increase quantity or ignore
        return; // Do nothing (avoid duplicates)
      } else {
        // Add new item to cart
        state.items.push({
          ...newItem,
          quantity: 1, // Optionally track quantity
        });
      }
    },

    removeItem: (state, action) => {
      const nameToRemove = action.payload;
      state.items = state.items.filter(item => item.name !== nameToRemove);
    },

    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
