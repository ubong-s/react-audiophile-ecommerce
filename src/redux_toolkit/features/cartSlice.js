import { createSlice } from '@reduxjs/toolkit';

const getLocalStorage = () => {
   const cartItems = JSON.parse(localStorage.getItem('cart'));

   if (cartItems) return cartItems;
   else return [];
};

const initialState = {
   cart: getLocalStorage(),
   total_items: 0,
   total_amount: 0,
   shipping_fee: 50,
   vat: 0,
   grand_total: 0,
};

export const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addToCart: (state, action) => {
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

         state.total_items = total_items;
         state.total_amount = total_amount;
         state.vat = 0.2 * total_amount;
         state.grand_total =
            state.total_amount + state.shipping_fee + state.vat;
      },

      toggleCartItemAmount: (state, action) => {
         const { id, value } = action.payload;

         const tempCart = state.cart.map((cartItem) => {
            if (id === cartItem.id) {
               if (value === 'increase') {
                  let newQuantity = cartItem.quantity + 1;

                  if (newQuantity > cartItem.max) {
                     newQuantity = cartItem.max;
                  }

                  return { ...cartItem, quantity: newQuantity };
               }

               if (value === 'decrease') {
                  let newQuantity = cartItem.quantity - 1;

                  if (newQuantity < 1) {
                     newQuantity = 1;
                  }

                  return { ...cartItem, quantity: newQuantity };
               }
            }

            return cartItem;
         });

         state.cart = tempCart;
      },

      clearCart: (state) => {
         state.cart = [];
      },
   },
});

// Action creators are generated for each case reducer function
export const {
   updateCartTotals,
   addToCart,
   removeItem,
   toggleCartItemAmount,
   clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
