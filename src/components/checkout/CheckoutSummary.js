import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { breakpoints, misc, typography } from '../../styles/theme';
import Button from '../shared/Button';

const CheckoutSummary = () => {
   const { cart, total_amount, shipping_fee, vat, grand_total } = useSelector(
      (state) => state.cart
   );

   return (
      <CheckoutSummaryWrap>
         <h3>Summary</h3>
         {cart.map((cartItem) => {
            const { id, name, image, price, quantity } = cartItem;

            return (
               <CartItem key={id}>
                  <img src={image} alt={name} />
                  <div className='info'>
                     <div>
                        <h4>{name}</h4>
                        <p>${new Intl.NumberFormat().format(price)}</p>
                     </div>

                     <p className='qty'>X{quantity}</p>
                  </div>
               </CartItem>
            );
         })}
         <Totals>
            <p>
               Total
               <span>${new Intl.NumberFormat().format(total_amount)}</span>
            </p>
            <p>
               Shipping
               <span>${shipping_fee}</span>
            </p>
            <p>
               vat (included)
               <span>${new Intl.NumberFormat().format(vat.toFixed(0))}</span>
            </p>
            <p className='grand-total'>
               Grand total
               <span>
                  ${new Intl.NumberFormat().format(grand_total.toFixed(0))}
               </span>
            </p>
         </Totals>
         <button className='submit-btn' type='submit' form='checkout'>
            Continue & pay
         </button>
      </CheckoutSummaryWrap>
   );
};

export default CheckoutSummary;

const CheckoutSummaryWrap = styled.aside`
   background-color: ${(props) => props.theme.white};
   border-radius: ${misc.rounded.sm};
   padding: 2rem 1rem;

   .submit-btn {
      background-color: ${(props) => props.theme.accent};
      color: ${(props) => props.theme.white};

      padding: 1rem 2rem;
      transition: ${misc.transition.ease};
      text-transform: uppercase;
      width: 100%;

      &:hover {
         background-color: ${(props) => props.theme.accent_light};
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      padding: 2rem;
   }
   @media screen and (min-width: ${breakpoints.desktop}) {
      position: sticky;
      top: 1.5rem;
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

   p {
      margin-bottom: 0;
      font-weight: ${typography.weight.semibold};
   }

   .info {
      display: flex;
      align-items: start;
      justify-content: space-between;

      .qty {
         margin-top: -0.25rem;
      }
   }
`;

const Totals = styled.div`
   p {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: ${typography.weight.semibold};
      text-transform: uppercase;
      margin-bottom: 0.5rem;

      span {
         font-weight: ${typography.weight.bold};
         color: ${(props) => props.theme.black};
      }
   }

   .grand-total {
      margin: 1.5rem 0 2rem;

      span {
         color: ${(props) => props.theme.accent};
      }
   }
`;
