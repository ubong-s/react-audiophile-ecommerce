import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
   CategoriesGrid,
   BestGear,
   PageHeader,
   ProductsListing,
   Seo,
} from '../../components';

const ProductCategories = () => {
   const { category } = useParams();

   const { allProducts } = useSelector((state) => state.products);

   const categoryProducts = allProducts
      .filter((product) => product.category === category)
      .sort((a, b) => {
         return b.true ? 1 : -1;
      });

   return (
      <>
         <Seo title={`${category[0].toUpperCase()}${category.substring(1)}`} />
         <PageHeader title={category} />
         <ProductsListing products={categoryProducts} />
         <CategoriesGrid />
         <BestGear />
      </>
   );
};

export default ProductCategories;
