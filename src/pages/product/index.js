import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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

const SingleProductPage = () => {
   const { slug } = useParams();
   const dispatch = useDispatch();

   const navigate = useNavigate();
   const {
      single_product_loading: loading,
      single_product_error: error,
      single_product: product,
   } = useSelector((state) => state.products);

   useEffect(() => {
      dispatch(fetchSingleProduct(slug));
      // eslint-disable-next-line
   }, [slug]);

   useEffect(() => {
      if (error) {
         setTimeout(() => {
            navigate('/');
         }, 3000);
      }
      // eslint-disable-next-line
   }, [error]);

   return (
      <>
         <Seo title={product?.name} />
         <BlackBar />
         {loading ? (
            <Loading />
         ) : product ? (
            <ProductDataRoot>
               <ProductInfo product={product} />
               <ProductFeatures
                  features={product.features}
                  box_items={product.includes}
               />

               <ProductGallery name={product.name} gallery={product.gallery} />
               <YouMayAlsoLike relatedProducts={product.others} />
            </ProductDataRoot>
         ) : null}
         <CategoriesGrid />
         <BestGear />
      </>
   );
};

export default SingleProductPage;

const Loading = styled.div`
   width: 100%;
   height: 85vh;
`;

const ProductDataRoot = styled.div`
   width: 100%;
`;
