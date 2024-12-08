import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import productReduct from "./product";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReduct,
  },
});

export default store;
