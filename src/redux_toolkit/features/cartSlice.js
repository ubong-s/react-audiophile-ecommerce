import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   cart: [],
   total_items: 0,
   total_amount: 0,
   shipping_fee: 50,
   vat: 0,
};

export const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      updateCart: (state) => {},
   },
});

// Action creators are generated for each case reducer function
export const { updateCart } = cartSlice.actions;

export default cartSlice.reducer;
