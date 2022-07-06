import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { breakpoints, misc, typography } from '../../styles/theme';
import { Button } from '../';
import { closeModal } from '../../redux_toolkit/features/globalSlice';
import { clearCart } from '../../redux_toolkit/features/cartSlice';

const CheckoutModal = () => {
   const dispatch = useDispatch();
   const {
      cart: { cart, grand_total },
      global: { modalOpen },
   } = useSelector((state) => state);

   return (
      <CheckoutModalWrap className={modalOpen ? 'modal-active' : null}>
         <ModalInner className='container'>
            <svg
               xmlns='http://www.w3.org/2000/svg'
               viewBox='0 0 20 20'
               fill='currentColor'
            >
               <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clipRule='evenodd'
               />
            </svg>
            <h2>
               Thank you
               <br /> for your order
            </h2>
            <p>You will receive an email confirmation shortly.</p>

            <Details>
               <ul className='items'>
                  {cart.map((cartItem) => {
                     const { id, name, image, price, quantity } = cartItem;

                     return (
                        <li key={id}>
                           <img src={image} alt={name} />
                           <div className='info'>
                              <div>
                                 <h4>{name}</h4>
                                 <p>${new Intl.NumberFormat().format(price)}</p>
                              </div>

                              <p className='qty'>X{quantity}</p>
                           </div>
                        </li>
                     );
                  })}
               </ul>
               <p className='grand-total'>
                  Grand total
                  <span>
                     ${new Intl.NumberFormat().format(grand_total.toFixed(0))}
                  </span>
               </p>
            </Details>

            <Link
               to='/'
               onClick={() => {
                  dispatch(clearCart());
                  dispatch(closeModal());
               }}
            >
               <Button colored='true' text='Back to Home' />
            </Link>
         </ModalInner>
      </CheckoutModalWrap>
   );
};

export default CheckoutModal;

const CheckoutModalWrap = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   position: fixed;
   left: 0;
   top: 0;
   width: 100%;
   height: 100vh;
   background-color: rgba(0, 0, 0, 0.6);
   z-index: 1002;
   overflow-y: scroll;
   -ms-overflow-style: none;
   scrollbar-width: none;
   display: none;

   &::-webkit-scrollbar {
      display: none;
   }

   &.modal-active {
      display: flex;
   }
`;

const ModalInner = styled.div`
   background-color: ${(props) => props.theme.white};
   padding: 2rem 1rem;
   border-radius: ${misc.rounded.sm};

   svg {
      width: 4rem;
      fill: ${(props) => props.theme.accent};
      margin-left: -2%;
   }

   h2 {
      line-height: 1.2;
   }

   a {
      width: 100%;

      & > button {
         width: 100%;
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      width: 60%;
      max-width: 600px;
      padding: 2rem;

      h2 {
         font-size: 2rem;
      }
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      width: 40%;
      padding: 3rem;

      svg {
         width: 5rem;
      }
   }
`;

const Details = styled.div`
   display: grid;

   border-radius: ${misc.rounded.sm};
   overflow: hidden;
   margin: 2rem 0 2.5rem;

   .items {
      background-color: ${(props) => props.theme.gray};
      padding: 2rem 1rem;

      li {
         display: grid;
         align-items: center;
         grid-template-columns: auto 1fr auto;
         gap: 1.5rem;

         img {
            width: 60px;
            height: 60px;
            border-radius: ${misc.rounded.sm};
         }

         h4 {
            margin-bottom: 0.15rem;
         }

         p {
            margin-bottom: 0;
            font-weight: ${typography.weight.semibold};
         }

         .info {
            display: flex;
            align-items: start;
            justify-content: space-between;
         }
      }
   }

   .grand-total {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      background-color: ${(props) => props.theme.black};
      color: ${(props) => props.theme.light_gray};
      font-weight: ${typography.weight.semibold};
      margin-bottom: 0;
      text-transform: uppercase;
      padding: 2rem;

      span {
         color: ${(props) => props.theme.white};
         font-size: 1.25rem;
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      grid-template-columns: 1.25fr 1fr;
   }
`;
