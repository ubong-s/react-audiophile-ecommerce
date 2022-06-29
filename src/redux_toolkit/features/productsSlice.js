import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   value: 0,
};

export const productsSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = productsSlice.actions;

export default productsSlice.reducer;
