import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { URI } from '../../constants/fetchURI';

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

export const productsSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {
      fetchSingleProduct: (state, action) => {
         const tempProduct = state.allProducts.find(
            (product) => product.slug === action.payload
         );

         state.single_product = tempProduct;
      },
   },
   extraReducers(builder) {
      builder
         .addCase(fetchProducts.pending, (state) => {
            state.loading = true;
         })
         .addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;

            state.allProducts = action.payload.products;
         })
         .addCase(fetchProducts.rejected, (state) => {
            state.loading = false;
            state.error = `Error fetching products`;
         });
   },
});

// Action creators are generated for each case reducer function
export const { fetchSingleProduct } = productsSlice.actions;

export default productsSlice.reducer;
