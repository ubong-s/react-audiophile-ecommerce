import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BlackBar, Button, Seo } from '../components';
import { breakpoints } from '../styles/theme';

const NotFound = () => {
   return (
      <>
         <Seo title='404' />
         <BlackBar />
         <NotFoundWrap>
            <div className='container'>
               <h1>Oops..., Page cannot be found</h1>

               <Link to='/'>
                  <Button colored='true' text='Back to Home' />
               </Link>
            </div>
         </NotFoundWrap>
      </>
   );
};

export default NotFound;

const NotFoundWrap = styled.section`
   display: grid;
   align-items: center;
   justify-items: center;
   height: 85vh;
   text-align: center;

   h1 {
      margin: 1.5rem 0;
   }

   button {
      a {
         color: white;
         font-size: 1rem;
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      h1 {
         margin-bottom: 2rem;
         font-size: 2.5rem;
      }

      button {
         a {
            font-size: 1.5rem;
         }
      }
   }
`;
