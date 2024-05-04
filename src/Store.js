import { configureStore } from "@reduxjs/toolkit";
import { productslice } from "./Reducer/Product";
import { quantitySlice } from "./Reducer/quantity";

export const store = configureStore({
  reducer: {
    products: productslice.reducer,
    quantity: quantitySlice.reducer,
  },
});
