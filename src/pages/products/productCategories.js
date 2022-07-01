import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
   CategoriesGrid,
   BestGear,
   PageHeader,
   ProductsListing,
} from '../../components';

const ProductCategories = () => {
   const { category } = useParams();

   const { allProducts } = useSelector((state) => state.products);

   const categoryProducts = allProducts
      .filter((product) => product.category === category)
      .sort((a, b) => {
         return b.true ? 1 : -1;
      });

   console.log(categoryProducts);

   return (
      <>
         <PageHeader title={category} />
         <ProductsListing products={categoryProducts} />
         <CategoriesGrid />
         <BestGear />
      </>
   );
};

export default ProductCategories;
