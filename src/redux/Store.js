import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./slices/CarrSlice";

export const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
  },
});
