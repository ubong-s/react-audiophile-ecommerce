import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
   clearCart,
   removeItem,
   toggleCartItemAmount,
} from '../../../redux_toolkit/features/cartSlice';
import { closeCart } from '../../../redux_toolkit/features/globalSlice';
import { misc, typography } from '../../../styles/theme';
import Button from '../Button';

const CartContent = () => {
   const dispatch = useDispatch();

   const {
      cart: { cart, total_items, total_amount },
   } = useSelector((state) => state);

   const remove = (id) => {
      dispatch(removeItem(id));
   };

   const toggleAmount = (id, value) => {
      dispatch(
         toggleCartItemAmount({
            id,
            value,
         })
      );
   };

   return (
      <CartContentWrap>
         <div className='cart-header'>
            <h3>Cart ({total_items})</h3>
            <button onClick={() => dispatch(clearCart())}>Remove All</button>
         </div>

         <ul>
            {cart.map((cartItem) => {
               const { id, name, image, price, quantity, max } = cartItem;

               return (
                  <CartItem key={id}>
                     <img src={image} alt={name} />
                     <div>
                        <h4>{name}</h4>
                        <p className='price'>
                           ${new Intl.NumberFormat().format(price)}
                        </p>
                     </div>

                     <div
                        className={
                           quantity === max
                              ? 'quantity limit-active'
                              : 'quantity'
                        }
                     >
                        <button
                           data-qty='decrease'
                           className='qty-btn'
                           onClick={(e) => {
                              if (quantity === 1) {
                                 return remove(id);
                              } else {
                                 toggleAmount(id, e.target.dataset.qty);
                              }
                           }}
                        >
                           -
                        </button>
                        <span className='qty'>{quantity}</span>
                        <button
                           data-qty='increase'
                           className='qty-btn'
                           onClick={(e) =>
                              toggleAmount(id, e.target.dataset.qty)
                           }
                        >
                           +
                        </button>
                     </div>
                  </CartItem>
               );
            })}
         </ul>

         <div className='total'>
            <p>
               <span>TOTAL</span>{' '}
               <span>${new Intl.NumberFormat().format(total_amount)}</span>
            </p>
         </div>

         <Link
            to='/checkout'
            className='checkout-btn'
            onClick={() => dispatch(closeCart())}
         >
            <Button colored='true' text='Checkout' />
         </Link>
      </CartContentWrap>
   );
};

export default CartContent;

const CartContentWrap = styled.div`
   .cart-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;

      h3 {
         margin: 0;
      }

      button {
         text-transform: capitalize;
         text-decoration: underline;
         color: ${(props) => props.theme.text};

         &:hover {
            color: ${(props) => props.theme.accent};
         }
      }
   }

   .total {
      margin: 1.25rem 0;

      p {
         display: flex;
         align-items: center;
         justify-content: space-between;
         font-weight: ${typography.weight.semibold};

         span:last-of-type {
            font-weight: ${typography.weight.bold};
            color: ${(props) => props.theme.black};
         }
      }
   }

   .checkout-btn {
      width: 100%;

      & > * {
         width: 100%;
      }
   }
`;

const CartItem = styled.li`
   display: grid;
   align-items: center;
   gap: 1rem;
   grid-template-columns: auto 1fr auto;
   margin-bottom: 1.5rem;

   img {
      width: 60px;
      height: 60px;
      border-radius: ${misc.rounded.sm};
   }

   h4 {
      margin-bottom: 0.15rem;
   }

   .price {
      font-weight: ${typography.weight.semibold};
   }

   p {
      margin-bottom: 0;
   }

   .quantity {
      display: flex;
      align-items: center;
      background-color: ${(props) => props.theme.gray};
      font-weight: ${typography.weight.bold};
      transition: ${misc.transition.ease};
      border: transparent 1px solid;
      height: 2.25rem;

      .qty-btn {
         padding: 0 1rem;
         color: ${(props) => props.theme.text};
         font-size: 1rem;

         &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
         }

         &:hover {
            color: ${(props) => props.theme.accent};
            transition: ${misc.transition.ease};
         }
      }

      .qty {
         display: flex;
         align-items: center;
         padding: 0 0.5rem;
         height: 100%;
         color: ${(props) => props.theme.black};
      }

      &.limit-active {
         border: ${(props) => props.theme.accent} 1px solid;
      }
   }
`;
