import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu } from '../../../redux_toolkit/features/globalSlice';
import { breakpoints, misc } from '../../../styles/theme';

const MobileMenuBtn = () => {
   const { menuOpen } = useSelector((state) => state.global);
   const dispatch = useDispatch();

   return (
      <MobileMenuBtnWrap
         type='button'
         aria-label='menu button'
         onClick={() => dispatch(toggleMenu())}
      >
         <span className={menuOpen ? 'burger active' : 'burger'}>
            <svg width='16' height='15' xmlns='http://www.w3.org/2000/svg'>
               <g fill='#FFF' fillRule='evenodd'>
                  <path d='M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z' />
                  <path d='M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z' />
               </g>
            </svg>
         </span>

         <span className={menuOpen ? 'burger' : 'burger active'}>
            <svg width='16' height='15' xmlns='http://www.w3.org/2000/svg'>
               <g fill='#FFF' fillRule='evenodd'>
                  <path d='M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z' />
               </g>
            </svg>
         </span>
      </MobileMenuBtnWrap>
   );
};

export default MobileMenuBtn;

const MobileMenuBtnWrap = styled.button`
   position: relative;
   z-index: 999;

   .burger {
      position: absolute;
      top: 50%;
      left: 0;
      opacity: 0;
      transform: translateY(-50%);
      transition: ${misc.transition.ease};
      line-height: 0;

      &.active {
         opacity: 1;
      }
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      display: none;
   }
`;
