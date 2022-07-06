import styled from 'styled-components';
import { breakpoints } from '../../styles/theme';
import GoBackBtn from '../shared/GoBackBtn';
import CheckoutForm from './CheckoutForm';
import CheckoutModal from './CheckoutModal';
import CheckoutSummary from './CheckoutSummary';

const CheckoutInfo = () => {
   return (
      <CheckoutInfoWrap className='container'>
         <GoBackBtn />
         <CheckoutLayout>
            <CheckoutForm />
            <CheckoutSummary />
         </CheckoutLayout>
         <CheckoutModal />
      </CheckoutInfoWrap>
   );
};

export default CheckoutInfo;

const CheckoutInfoWrap = styled.section`
   padding: 4rem 0;

   @media screen and (min-width: ${breakpoints.tablet}) {
      padding: 4rem 0 6rem;
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      padding: 6rem 0 8rem;
   }
`;
const CheckoutLayout = styled.div`
   padding-top: 3rem;
   display: grid;
   gap: 2rem;

   @media screen and (min-width: ${breakpoints.desktop}) {
      grid-template-columns: 2fr 1fr;
      align-items: flex-start;
   }
`;
