import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   menuOpen: false,
};

export const globalSlice = createSlice({
   name: 'global',
   initialState,
   reducers: {
      toggleMenu: (state) => {
         state.menuOpen = !state.menuOpen;
      },
      closeMenu: (state) => {
         state.menuOpen = false;
      },
   },
});

// Action creators are generated for each case reducer function
export const { toggleMenu, closeMenu } = globalSlice.actions;

export default globalSlice.reducer;
