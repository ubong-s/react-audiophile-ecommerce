import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { breakpoints, misc } from '../../../styles/theme';
import CategoriesGrid from '../CategoriesGrid';

const MobileNav = () => {
   const { menuOpen } = useSelector((state) => state.global);

   return (
      <MobileNavWrap className={menuOpen ? 'active' : null}>
         <div className='container'>
            <CategoriesGrid click='true' />
         </div>
      </MobileNavWrap>
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
   transition: ${misc.transition.linear};

   &.active {
      transform: translateX(0);
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
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
