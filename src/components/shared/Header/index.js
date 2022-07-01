import styled from 'styled-components';
import { breakpoints } from '../../../styles/theme';
import Logo from '../Logo';
import CartBtn from './CartBtn';
import DesktopNav from './DesktopNav';
import MobileMenuBtn from './MobileMenuBtn';
import MobileNav from './MobileNav';

const Header = () => {
   return (
      <HeaderWrap>
         <HeaderInner className='container'>
            <MobileMenuBtn />
            <Logo />
            <MobileNav />
            <DesktopNav />
            <CartBtn />
         </HeaderInner>
      </HeaderWrap>
   );
};

export default Header;

const HeaderWrap = styled.header`
   position: relative;
   border-bottom: 1px solid rgba(255, 255, 255, 0.2);
   z-index: 1000;

   @media screen and (min-width: ${breakpoints.tablet}) {
      border-bottom: none;
   }
`;

const HeaderInner = styled.div`
   height: 90px;
   display: flex;
   align-items: center;
   justify-content: space-between;

   @media screen and (min-width: ${breakpoints.tablet}) {
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: 3rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      gap: 8rem;
   }
`;
