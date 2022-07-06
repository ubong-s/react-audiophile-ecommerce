import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { breakpoints, misc } from '../../../styles/theme';
import CategoriesGrid from '../CategoriesGrid';

const MobileNav = () => {
   const { menuOpen, cartOpen, modalOpen } = useSelector(
      (state) => state.global
   );

   return (
      <>
         <MobileNavWrap
            className={
               menuOpen
                  ? 'menu-active'
                  : cartOpen
                  ? 'cart-active'
                  : modalOpen
                  ? 'modal-active'
                  : null
            }
         >
            <CategoriesGrid click='true' />
         </MobileNavWrap>
      </>
   );
};

export default MobileNav;

const MobileNavWrap = styled.nav`
   position: absolute;
   left: 0;
   top: 100%;
   width: 100%;
   padding: 2rem 0;
   background-color: ${(props) => props.theme.white};
   border-bottom-left-radius: ${misc.rounded.sm};
   border-bottom-right-radius: ${misc.rounded.sm};
   transform: translateX(-100vw);
   transform-origin: left top;
   opacity: 0;
   transition: ${misc.transition.linear};
   z-index: 1000;

   &.menu-active {
      opacity: 1;
      transform: translateX(0);
   }

   &.cart-active,
   &.modal-active {
      opacity: 0;
      display: none;
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      transform: translateX(0);
      transform: translateY(-100vh);

      &.menu-active {
         transform: translateY(0);
      }
   }
   @media screen and (min-width: ${breakpoints.desktop}) {
      display: none;
   }
`;
