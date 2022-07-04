import styled from 'styled-components';
import { closeCart } from '../../../redux_toolkit/features/globalSlice';
import { breakpoints, misc } from '../../../styles/theme';
import { useDispatch, useSelector } from 'react-redux';

import CartEmpty from './CartEmpty';
import CartContent from './CartContent';

const Cart = () => {
   const dispatch = useDispatch();

   const {
      global: { cartOpen },
      cart: { cart },
   } = useSelector((state) => state);

   return (
      <CartWrap className={!cartOpen ? 'closed-cart' : null}>
         <CartOverlay onClick={() => dispatch(closeCart())}></CartOverlay>
         <div className='container'>
            <CartBox>
               {cart.length > 0 ? <CartContent /> : <CartEmpty />}
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
   display: grid;
   gap: 1rem;
   right: 0;
   max-width: 400px;
   top: 1rem;
   padding: 1.5rem;
   background-color: ${(props) => props.theme.white};
   border-radius: ${misc.rounded.sm};
   transition: ${misc.transition.ease};

   @media screen and (min-width: ${breakpoints.tablet}) {
      padding: 2rem;
      width: 400px;
   }
`;
