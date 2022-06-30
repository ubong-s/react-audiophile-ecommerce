import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { breakpoints, misc } from '../../../styles/theme';
import CategoriesGrid from '../CategoriesGrid';

const MobileNav = () => {
   const { menuOpen } = useSelector((state) => state.global);

   return (
      <>
         <MobileNavWrap className={menuOpen ? 'active' : null}>
            <CategoriesGrid click='true' />
         </MobileNavWrap>
         {/* <Overlay></Overlay> */}
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
   transform: translateX(-100vw) scale(0);
   transform-origin: left top;
   opacity: 0;
   transition: ${misc.transition.linear};
   z-index: 1000;

   &.active {
      opacity: 1;
      transform: translateX(0) scale(1);
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      transform-origin: top;
      transform: translateX(0);
      transform: translateY(-100vh);

      &.active {
         transform: translateY(0);
      }
   }
   @media screen and (min-width: ${breakpoints.desktop}) {
      display: none;
   }
`;

const Overlay = styled.div`
   position: absolute;
   left: 0;
   top: 80px;
   width: 100%;
   height: 100%;
   background-color: red;
   z-index: 2000;
`;
