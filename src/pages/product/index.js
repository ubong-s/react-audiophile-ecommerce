import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BlackBar } from '../../components';
import { fetchSingleProduct } from '../../redux_toolkit/features/productsSlice';

const SingleProductPage = () => {
   const { slug } = useParams();

   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(fetchSingleProduct(slug));
   }, [slug]);

   return (
      <>
         <BlackBar />
      </>
   );
};

export default SingleProductPage;
