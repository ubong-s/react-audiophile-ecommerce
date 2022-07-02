import styled from 'styled-components';
import { breakpoints } from '../../styles/theme';

const ProductGallery = ({ gallery, name }) => {
   return (
      <>
         {gallery && (
            <ProductGalleryWrap className='container'>
               <div className='image first'>
                  <img
                     src={gallery.first.mobile}
                     alt={name}
                     className='mobile'
                  />
                  <img
                     src={gallery.first.tablet}
                     alt={name}
                     className='tablet'
                  />
                  <img
                     src={gallery.first.desktop}
                     alt={name}
                     className='desktop'
                  />
               </div>
               <div className='image second'>
                  <img
                     src={gallery.second.mobile}
                     alt={name}
                     className='mobile'
                  />
                  <img
                     src={gallery.second.tablet}
                     alt={name}
                     className='tablet'
                  />
                  <img
                     src={gallery.second.desktop}
                     alt={name}
                     className='desktop'
                  />
               </div>
               <div className='image third'>
                  <img
                     src={gallery.third.mobile}
                     alt={name}
                     className='mobile'
                  />
                  <img
                     src={gallery.third.tablet}
                     alt={name}
                     className='tablet'
                  />
                  <img
                     src={gallery.third.desktop}
                     alt={name}
                     className='desktop'
                  />
               </div>
            </ProductGalleryWrap>
         )}
      </>
   );
};

export default ProductGallery;

const ProductGalleryWrap = styled.section`
   display: grid;
   gap: 1.5rem;

   @media screen and (min-width: ${breakpoints.tablet}) {
      grid-template-columns: 1fr 1.5fr;
      grid-template-rows: auto auto;

      gap: 1rem;

      .image {
         img {
            height: 100% !important;
         }
      }

      .second {
         grid-column: 1 / 2;
      }

      .third {
         grid-row: 1 / 3;
         grid-column: 2 / 3;
      }
   }
   @media screen and (min-width: ${breakpoints.desktop}) {
      gap: 2rem;
   }
`;
