import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import {
   CategoriesGrid,
   BestGear,
   PageHeader,
   ProductsListing,
   Seo,
} from '../../components';
import { fadeIn } from '../../animations';

const ProductCategories = () => {
   const { category } = useParams();

   const { allProducts } = useSelector((state) => state.products);

   const categoryProducts = allProducts
      .filter((product) => product.category === category)
      .sort((a, b) => {
         return b.true ? 1 : -1;
      });

   return (
      <motion.div
         variants={fadeIn}
         initial='initial'
         animate='animate'
         exit='exit'
      >
         <Seo title={`${category[0].toUpperCase()}${category.substring(1)}`} />
         <PageHeader title={category} />
         <ProductsListing products={categoryProducts} />
         <CategoriesGrid />
         <BestGear />
      </motion.div>
   );
};

export default ProductCategories;
