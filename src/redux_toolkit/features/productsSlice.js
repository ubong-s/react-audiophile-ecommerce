import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
   allProducts: [],
   loading: false,
   error: null,
};

export const fetchProducts = createAsyncThunk(
   'products/fetchProducts',
   async () => {
      const res = await fetch('http://localhost:4000/products');

      const result = await res.json();
      return result;
   }
);

export const productsSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {},
   extraReducers(builder) {
      builder
         .addCase(fetchProducts.pending, (state) => {
            state.loading = true;
         })
         .addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            console.log(action);
            state.allProducts = action.payload;
         })
         .addCase(fetchProducts.rejected, (state) => {
            state.error = `Error fetching products`;
         });
   },
});

// Action creators are generated for each case reducer function
export const {} = productsSlice.actions;

export default productsSlice.reducer;
