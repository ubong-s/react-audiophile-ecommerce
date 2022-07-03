import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Theme } from './styles/theme';
import { GlobalStyles } from './styles/globalStyle';
import { Footer, Header, Loading } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './redux_toolkit/features/productsSlice';
import Cart from './components/shared/Cart';
// import SingleProductPage from './pages/product';

// Pages
const HomePage = lazy(() => import('./pages'));
const ProductCategories = lazy(() =>
   import('./pages/products/productCategories')
);
const SingleProductPage = lazy(() => import('./pages/product'));
const NotFound = lazy(() => import('./pages/404'));

function App() {
   const dispatch = useDispatch();
   const location = useLocation();
   const { menuOpen, cartOpen } = useSelector((state) => state.global);

   useEffect(() => {
      dispatch(fetchProducts());
      // eslint-disable-next-line
   }, []);

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [location.pathname]);

   return (
      <>
         <Theme>
            <Suspense fallback={<Loading />}>
               <GlobalStyles />
               <Cart />
               <Header />
               <main
                  className={
                     menuOpen ? 'menu-active' : cartOpen ? 'cart-active' : null
                  }
               >
                  <Routes>
                     <Route exact path='/' element={<HomePage />} />
                     <Route
                        exact
                        path='/products/:category'
                        element={<ProductCategories />}
                     />

                     <Route
                        exact
                        path='/product/:slug'
                        element={<SingleProductPage />}
                     />
                     <Route path='*' element={<NotFound />} />
                  </Routes>
               </main>
               <Footer />
            </Suspense>
         </Theme>
      </>
   );
}

export default App;
