import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {  cartCount: 0, showCart: true, cartItem: []  },
  reducers: {
    toggleCart(state) {
        console.log(state.showCart);
        state.showCart = !state.showCart
    },
      addCart(state) {},
  },
});
console.log(cartSlice.actions);
export const cartAction = cartSlice.actions
export default cartSlice.reducer