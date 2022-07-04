import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { closeCart } from '../../../redux_toolkit/features/globalSlice';
import Button from '../Button';

const CartEmpty = () => {
   const dispatch = useDispatch();
   return (
      <CartEmptyWrap>
         <h3>Your Cart is empty</h3>
         <img src='/assets/cart/icon_empty_cart.svg' alt='Empty Cart' />
         <div onClick={() => dispatch(closeCart())}>
            <Button colored='true' text='Go Shopping' />
         </div>
      </CartEmptyWrap>
   );
};

export default CartEmpty;

const CartEmptyWrap = styled.div`
   padding: 1rem;
   text-align: center;

   img {
      width: 125px;
      height: 125px;
      margin-bottom: 1rem;
   }
`;
