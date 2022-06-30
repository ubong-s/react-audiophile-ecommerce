import styled from 'styled-components';
import { breakpoints, misc } from '../../styles/theme';

const BestGear = () => {
   return (
      <BestGearWrap>
         <BestGearInner className='container'>
            <div className='image'>
               <img
                  src='/assets/shared/mobile/image-best-gear.jpg'
                  alt='Best Gear'
                  className='mobile'
               />
               <img
                  src='/assets/shared/tablet/image-best-gear.jpg'
                  alt='Best Gear'
                  className='tablet'
               />
               <img
                  src='/assets/shared/desktop/image-best-gear.jpg'
                  alt='Best Gear'
                  className='desktop'
               />
            </div>
            <div className='content'>
               <h2>
                  Bringing you the <span>best</span> audio gear
               </h2>
               <p>
                  Located at the heart of New York City, Audiophile is the
                  premier store for high end headphones, earphones, speakers,
                  and audio accessories. We have a large showroom and luxury
                  demonstration rooms available for you to browse and experience
                  a wide range of our products. Stop by our store to meet some
                  of the fantastic people who make Audiophile the best place to
                  buy your portable audio equipment.
               </p>
            </div>
         </BestGearInner>
      </BestGearWrap>
   );
};

export default BestGear;

const BestGearWrap = styled.section`
   padding: 8rem 0 10rem;

   @media screen and (min-width: ${breakpoints.desktop}) {
      padding: 14rem 0;
   }
`;

const BestGearInner = styled.div`
   display: grid;
   gap: 3rem;
   text-align: center;

   .image {
      .desktop,
      .tablet {
         display: none;
      }

      img {
         border-radius: ${misc.rounded.sm};
      }
   }

   .content {
      h2 {
         font-size: 2rem;
         margin-bottom: 2.5rem;

         span {
            color: ${(props) => props.theme.accent};
         }
      }

      p {
         margin-bottom: 0;
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      .image {
         .tablet {
            display: block;
         }

         .desktop,
         .mobile {
            display: none;
         }
      }

      .content {
         padding: 0 4rem;

         h2 {
            font-size: 2.5rem;
         }
      }
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      text-align: left;
      grid-template-areas: 'content image';
      gap: unset;

      .image {
         grid-area: image;

         .desktop {
            display: block;
         }

         .tablet,
         .mobile {
            display: none;
         }
      }

      .content {
         grid-area: content;
         padding: 0;
         margin-right: 7rem;

         h2 {
            /* font-size: 3rem; */
         }
      }
   }
`;
