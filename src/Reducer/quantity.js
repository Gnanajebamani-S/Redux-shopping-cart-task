import { createSlice } from "@reduxjs/toolkit";

const productQty = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

export const quantitySlice = createSlice({
  name: "quantity",
  initialState: productQty,
  reducers: {
    // This is an incremental action that increases the quantity of a specific product by 1.
    incrementQty: (state, action) => {
      const { productId } = action.payload;
      state[productId]++;
    },
    // This is an decremental action that decreases the quantity of a specific product by 1.
    decrementQty: (state, action) => {
      const { productId } = action.payload;
      if (state[productId] > 0) {
        state[productId]--;
      }
    },
  },
});

export const { incrementQty, decrementQty } = quantitySlice.actions;
