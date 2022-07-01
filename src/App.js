import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Theme } from './styles/theme';
import { GlobalStyles } from './styles/globalStyle';
import { Footer, Header } from './components';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './redux_toolkit/features/productsSlice';

// Pages
const HomePage = lazy(() => import('./pages'));
const ProductCategories = lazy(() =>
   import('./pages/products/productCategories')
);
const SingleProductPage = lazy(() => import('./pages/product'));
const NotFound = lazy(() => import('./pages/404'));

function App() {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchProducts());
   }, []);

   return (
      <>
         <Suspense fallback='Loading...'>
            <Theme>
               <GlobalStyles />
               <Router>
                  <Header />
                  <main>
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
               </Router>
            </Theme>
         </Suspense>
      </>
   );
}

export default App;
