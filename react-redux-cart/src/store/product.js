import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Product 1",
    price: 6,
    qty: 1,
  },
  { name: "Product 2", price: 10, qty: 10 },
];

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct(state) {
      const product = {
        name: `Product ${state.length + 1}`,
        price: Math.floor(Math.random() * 10 + 1),
        qty: 1,
      };
      state.push(product);
    },
    increase(state, action) {
      const id = action.payload;
      state[id].qty = state[id].qty + 1;
    },
    decrease(state, action) {
      const id = action.payload;
      state[id].qty = state[id].qty - 1;
      if(state[id].qty === 0) state.splice(id, 1);
    },
  },
});

export const productAction = productSlice.actions;
export default productSlice.reducer;
