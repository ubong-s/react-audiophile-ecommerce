import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { BestGear, BlackBar, CategoriesGrid, Seo } from '../../components';
import { fetchSingleProduct } from '../../redux_toolkit/features/productsSlice';
import {
   ProductInfo,
   ProductFeatures,
   ProductGallery,
   YouMayAlsoLike,
} from '../../components';
import styled from 'styled-components';
import { fadeIn } from '../../animations';

const SingleProductPage = () => {
   const { slug } = useParams();
   const dispatch = useDispatch();

   const { single_product: product } = useSelector((state) => state.products);

   useEffect(() => {
      dispatch(fetchSingleProduct(slug));
      // eslint-disable-next-line
   }, [slug]);

   return (
      <motion.div
         variants={fadeIn}
         initial='initial'
         animate='animate'
         exit='exit'
      >
         <Seo title={product?.name} />
         <BlackBar />
         {product ? (
            <ProductDataRoot>
               <ProductInfo product={product} />
               <ProductFeatures
                  features={product?.features}
                  box_items={product?.includes}
               />

               <ProductGallery name={product.name} gallery={product.gallery} />
               <YouMayAlsoLike relatedProducts={product.others} />
            </ProductDataRoot>
         ) : null}
         <CategoriesGrid />
         <BestGear />
      </motion.div>
   );
};

export default SingleProductPage;

const ProductDataRoot = styled.div`
   width: 100%;
`;
