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
      addToCart: (state, action) => {
         console.log(action);
         const { id, slug, quantity, product } = action.payload;

         const tempItem = state.cart.find((item) => item.id === id + slug);

         if (tempItem) {
            let tempCart = [...state.cart].map((cartItem) => {
               if (cartItem.id === id + slug) {
                  let newQuantity = cartItem.quantity + quantity;

                  if (newQuantity > cartItem.max) {
                     newQuantity = cartItem.max;
                  }

                  return { ...cartItem, quantity: newQuantity };
               } else {
                  return cartItem;
               }
            });

            state.cart = tempCart;
         } else {
            const newItem = {
               id: id + slug,
               name: product.nickname,
               quantity,
               image: product.image.mobile,
               price: product.price,
               max: 10,
            };

            state.cart = [...state.cart, newItem];
         }
      },
      removeItem: (state, action) => {
         const tempCart = state.cart.filter(
            (item) => item.id !== action.payload
         );

         state.cart = tempCart;
      },
      updateCartTotals: (state) => {
         const { total_items, total_amount } = state.cart.reduce(
            (total, cartItem) => {
               const { quantity, price } = cartItem;

               total.total_items += quantity;
               total.total_amount += quantity * price;

               return total;
            },
            { total_items: 0, total_amount: 0 }
         );

         state.total_amount = total_amount;
         state.total_items = total_items;
      },
      clearCart: (state) => {
         state.cart = [];
      },
   },
});

// Action creators are generated for each case reducer function
export const { updateCartTotals, addToCart, removeItem, clearCart } =
   cartSlice.actions;

export default cartSlice.reducer;
