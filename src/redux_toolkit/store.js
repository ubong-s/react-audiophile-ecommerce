import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/productsSlice';
import cartReducer from './features/cartSlice';
import globalReducer from './features/globalSlice';

export const store = configureStore({
   reducer: {
      products: productsReducer,
      cart: cartReducer,
      global: globalReducer,
   },
});
