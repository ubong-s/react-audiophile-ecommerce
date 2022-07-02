import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URI = 'http://localhost:4000/products';

const initialState = {
   loading: false,
   error: null,
   allProducts: [],
   single_product_loading: false,
   single_product_error: null,
   single_product: {},
};

export const fetchProducts = createAsyncThunk(
   'products/fetchProducts',
   async () => {
      const res = await fetch(URI);
      const result = await res.json();
      return result;
   }
);

export const fetchSingleProduct = createAsyncThunk(
   'products/fetchSingleProduct',
   async (query) => {
      const res = await fetch(`${URI}?slug=${query}`);

      const result = await res.json();
      return result[0];
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

            state.allProducts = action.payload;
         })
         .addCase(fetchProducts.rejected, (state) => {
            state.error = `Error fetching products`;
         })
         .addCase(fetchSingleProduct.pending, (state) => {
            state.single_product_loading = true;
         })
         .addCase(fetchSingleProduct.fulfilled, (state, action) => {
            state.single_product_loading = false;
            console.log(action.payload);
            state.single_product = action.payload;
         })
         .addCase(fetchSingleProduct.rejected, (state) => {
            state.single_product_error = `Error fetching product`;
         });
   },
});

// Action creators are generated for each case reducer function
export const {} = productsSlice.actions;

export default productsSlice.reducer;
