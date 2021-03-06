import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fadeIn } from '../animations';
import { BlackBar, Button, CheckoutInfo, Seo } from '../components';

const CheckoutPage = () => {
   const { cart } = useSelector((state) => state.cart);

   return (
      <motion.div
         variants={fadeIn}
         initial='initial'
         animate='animate'
         exit='exit'
      >
         <Seo title='Checkout' />
         <BlackBar />

         {cart.length < 1 ? (
            <EmptyCart>
               <div className='container'>
                  <h3>Your Cart is empty</h3>
                  <img
                     src='/assets/cart/icon_empty_cart.svg'
                     alt='Empty Cart'
                  />
                  <Link to='/'>
                     <Button colored='true' text='Go Shopping' />
                  </Link>
               </div>
            </EmptyCart>
         ) : (
            <CheckoutInfo />
         )}
      </motion.div>
   );
};

export default CheckoutPage;

const EmptyCart = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   height: 85vh;
   text-align: center;

   .container {
   }

   img {
      display: block;
      width: 200px;
      height: 200px;
      margin: 2rem auto;
   }
`;
