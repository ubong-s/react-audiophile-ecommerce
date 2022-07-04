import React from 'react';
import styled from 'styled-components';
import { closeCart } from '../../redux_toolkit/features/globalSlice';
import { breakpoints, misc } from '../../styles/theme';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
   const dispatch = useDispatch();

   const {
      global: { cartOpen },
      cart: { cart, total_items },
   } = useSelector((state) => state);

   return (
      <CartWrap className={!cartOpen ? 'closed-cart' : null}>
         <CartOverlay onClick={() => dispatch(closeCart())}></CartOverlay>
         <div className='container'>
            <CartBox>
               <div className='cart-header'>
                  <h3>Cart ({total_items})</h3>
                  <button>Remove All</button>
               </div>
               <ul>
                  {cart.length > 0 ? (
                     cart.map((cartItem) => {
                        const { id, name, image, price, quantity } = cartItem;

                        return (
                           <CartItem key={id}>
                              <img src={image} alt={name} />
                              <div>
                                 <h4>{name}</h4>
                                 <p>${new Intl.NumberFormat().format(price)}</p>
                              </div>

                              <div className='quantity'>
                                 <button
                                    data-qty='decrease'
                                    className='qty-btn'
                                 >
                                    -
                                 </button>
                                 <span className='qty'>{quantity}</span>
                                 <button
                                    data-qty='increase'
                                    className='qty-btn'
                                 >
                                    +
                                 </button>
                              </div>
                           </CartItem>
                        );
                     })
                  ) : (
                     <div>Empty Cart</div>
                  )}
               </ul>
            </CartBox>
         </div>
      </CartWrap>
   );
};

export default Cart;

const CartWrap = styled.div`
   position: fixed;
   left: 0;
   top: 90px;
   height: 100%;
   width: 100%;
   z-index: 1000;
   overflow: hidden;
   transition: ${misc.transition.ease};
   opacity: 1;
   overflow: scroll;
   -ms-overflow-style: none;
   scrollbar-width: none;

   &::-webkit-scrollbar {
      display: none;
   }

   .container {
      position: relative;
   }

   &.closed-cart {
      opacity: 0;
      z-index: -10;
      visibility: hidden;
   }
`;
const CartOverlay = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   height: 100%;
   width: 100%;
   background-color: rgba(0, 0, 0, 0.5);

   transition: ${misc.transition.ease};
`;

const CartBox = styled.div`
   position: absolute;
   right: 0;
   max-width: 400px;
   top: 1rem;
   padding: 1.5rem;
   background-color: ${(props) => props.theme.white};
   border-radius: ${misc.rounded.sm};
   transition: ${misc.transition.ease};

   .cart-header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h3 {
         margin: 0;
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      padding: 2rem;
   }
`;

const CartItem = styled.li`
   display: grid;
   gap: 0.5rem;
   grid-template-columns: auto 1fr auto;

   img {
      width: 50px;
      height: 50px;
      border-radius: ${misc.rounded.sm};
   }

   h4 {
      margin-bottom: 0.5rem;
   }
`;
