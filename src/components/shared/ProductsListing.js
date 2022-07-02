import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from '../../styles/theme';
import Button from './Button';

const ProductsListing = ({ products = [] }) => {
   return (
      <ProductsListingWrap className='container'>
         {products &&
            products.length > 0 &&
            products.map((product) => {
               const {
                  id,
                  slug,
                  archiveImage,
                  name,
                  description,
                  new: newProduct,
               } = product;

               return (
                  <Product key={id}>
                     <div className='image'>
                        <img
                           src={archiveImage.mobile}
                           alt={name}
                           className='mobile'
                        />
                        <img
                           src={archiveImage.tablet}
                           alt={name}
                           className='tablet'
                        />
                        <img
                           src={archiveImage.desktop}
                           alt={name}
                           className='desktop'
                        />
                     </div>
                     <div className='content'>
                        {newProduct ? (
                           <p className='subheader'>New product </p>
                        ) : null}
                        <h2>{name}</h2>
                        <p className='desc'>{description}</p>
                        <Link to={`/product/${slug}`}>
                           <Button colored='true' text='See product' />
                        </Link>
                     </div>
                  </Product>
               );
            })}
      </ProductsListingWrap>
   );
};

export default ProductsListing;

const ProductsListingWrap = styled.section`
   padding: 4rem 0;
`;

const Product = styled.article`
   display: grid;
   gap: 2rem;
   text-align: center;
   padding: 4rem 0;

   .content {
      .subheader {
         text-transform: uppercase;
         letter-spacing: 4px;
         color: ${(props) => props.theme.accent};
      }

      .desc {
         margin: 1.5rem 0 2rem;
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      gap: 3rem;

      .content {
         width: 90%;
         margin: auto;

         .subheader {
            letter-spacing: 8px;
         }

         h2 {
            padding: 0 8rem;
         }
      }
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      grid-template-columns: 1.25fr 1fr;
      gap: 8rem;
      text-align: left;
      padding: 5rem 0;

      .content {
         width: unset;
         margin: auto;

         .subheader {
            letter-spacing: 8px;
         }

         h2 {
            padding: 0;
            padding-right: 8rem;
         }
      }

      &:nth-child(even) {
         grid-template-columns: 1fr 1.25fr;
         grid-template-areas: 'content image';

         .image {
            grid-area: image;
         }

         .content {
            grid-area: content;
         }
      }
   }
`;
