import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { categories } from '../../../constants/menuNav';
import { breakpoints } from '../../../styles/theme';

const DesktopNav = () => {
   const location = useLocation();

   return (
      <DesktopNavWrap>
         <Link to='/' className={location.pathname === '/' ? 'active' : null}>
            Home
         </Link>
         {categories.map((category) => (
            <Link
               key={category.id}
               to={category.link}
               className={location.pathname === category.link ? 'active' : null}
            >
               {category.title}
            </Link>
         ))}
      </DesktopNavWrap>
   );
};

export default DesktopNav;

const DesktopNavWrap = styled.nav`
   display: none;
   position: relative;
   z-index: 2;

   @media screen and (min-width: ${breakpoints.desktop}) {
      display: flex;
      gap: 3rem;

      a {
         color: ${(props) => props.theme.white};
         text-transform: uppercase;
         font-weight: 700;

         &.active {
            color: ${(props) => props.theme.accent};
         }
      }
   }
`;
