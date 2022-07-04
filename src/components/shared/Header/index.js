import styled from 'styled-components';
import { breakpoints, misc } from '../../../styles/theme';
import Logo from '../Logo';
import CartBtn from './CartBtn';
import DesktopNav from './DesktopNav';
import MobileMenuBtn from './MobileMenuBtn';
import MobileNav from './MobileNav';
import { useSelector } from 'react-redux';

const Header = () => {
   const { menuOpen, cartOpen } = useSelector((state) => state.global);

   return (
      <HeaderWrap
         className={menuOpen ? 'menu-active' : cartOpen ? 'cart-active' : null}
      >
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
   z-index: 999;
   transition: ${misc.transition.ease};
   background: transparent;

   &.menu-active {
      background: ${(props) => props.theme.black};
   }

   &.cart-active {
      background: ${(props) => props.theme.black};
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      border-bottom: none;
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      &.menu-active {
         background: transparent;
      }
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
