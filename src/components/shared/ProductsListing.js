import { Link } from 'react-router-dom';
import styled from 'styled-components';
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

               console.log(product);
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
                        <p>{description}</p>
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
`;
