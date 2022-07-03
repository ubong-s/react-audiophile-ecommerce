import React from 'react';
import styled from 'styled-components';
import { closeCart } from '../../redux_toolkit/features/globalSlice';
import { misc } from '../../styles/theme';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
   const dispatch = useDispatch();

   const { cartOpen } = useSelector((state) => state.global);

   return (
      <CartWrap
         onClick={() => dispatch(closeCart())}
         className={!cartOpen ? 'closed-cart' : null}
      >
         <div className='container'>
            <CartBox className={!cartOpen ? 'closed-cart' : null}>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
               expedita aliquam vero itaque provident, amet modi exercitationem
               hic sequi dolore officiis fuga, ipsa cupiditate esse debitis
               eligendi atque rerum sunt?
            </CartBox>
         </div>
      </CartWrap>
   );
};

export default Cart;

const CartWrap = styled.div`
   position: fixed;
   left: 0;
   top: 0;
   height: 100%;
   width: 100%;
   background-color: rgba(0, 0, 0, 0.5);
   z-index: 1000;
   overflow: hidden;
   transform: ${misc.transition.ease};

   .container {
      position: relative;
   }

   &.closed-cart {
      opacity: 0;
      z-index: -10;
      visibility: hidden;
   }
`;
const CartBox = styled.div`
   position: absolute;
   right: 0;
   max-width: 400px;
   top: calc(91px + 1rem);
   padding: 1.5rem;
   background-color: ${(props) => props.theme.white};
   border-radius: ${misc.rounded.sm};
   transform: ${misc.transition.ease};

   &.closed-cart {
      opacity: 0;
      visibility: hidden;
   }
`;
