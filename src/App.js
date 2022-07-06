import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Theme } from './styles/theme';
import { GlobalStyles } from './styles/globalStyle';
import { Footer, Header, Loading, Cart } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './redux_toolkit/features/productsSlice';
import { updateCartTotals } from './redux_toolkit/features/cartSlice';
import { AnimatePresence } from 'framer-motion';

// Pages
const HomePage = lazy(() => import('./pages'));
const ProductCategories = lazy(() =>
   import('./pages/products/productCategories')
);
const SingleProductPage = lazy(() => import('./pages/product'));
const CheckoutPage = lazy(() => import('./pages/checkout'));
const NotFound = lazy(() => import('./pages/404'));

function App() {
   const dispatch = useDispatch();
   const location = useLocation();
   const {
      global: { menuOpen, cartOpen, modalOpen },
      cart: { cart },
   } = useSelector((state) => state);
   console.log(location.key);

   useEffect(() => {
      dispatch(fetchProducts());
      // eslint-disable-next-line
   }, []);

   useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
      dispatch(updateCartTotals());
      // eslint-disable-next-line
   }, [cart]);

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [location.pathname]);

   return (
      <>
         <Theme>
            <AnimatePresence exitBeforeEnter>
               <Suspense fallback={<Loading />}>
                  <GlobalStyles />
                  <Cart />

                  <Header />
                  <main
                     className={
                        menuOpen
                           ? 'menu-active'
                           : cartOpen
                           ? 'cart-active'
                           : modalOpen
                           ? 'modal-active'
                           : null
                     }
                  >
                     <Routes location={location} key={location.key}>
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

                        <Route
                           exact
                           path='/checkout'
                           element={<CheckoutPage />}
                        />
                        <Route path='*' element={<NotFound />} />
                     </Routes>
                  </main>
                  <Footer />
               </Suspense>
            </AnimatePresence>
         </Theme>
      </>
   );
}

export default App;
