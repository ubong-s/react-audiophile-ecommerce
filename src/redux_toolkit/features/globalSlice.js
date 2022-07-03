import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   menuOpen: false,
   cartOpen: false,
};

export const globalSlice = createSlice({
   name: 'global',
   initialState,
   reducers: {
      toggleMenu: (state) => {
         state.cartOpen = false;
         state.menuOpen = !state.menuOpen;
      },
      closeMenu: (state) => {
         state.menuOpen = false;
      },
      toggleCart: (state) => {
         state.menuOpen = false;
         state.cartOpen = !state.cartOpen;
      },
      closeCart: (state) => {
         state.cartOpen = false;
      },
   },
});

// Action creators are generated for each case reducer function
export const { toggleMenu, closeMenu, toggleCart, closeCart } =
   globalSlice.actions;

export default globalSlice.reducer;
