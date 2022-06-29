import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Theme } from './styles/theme';
import { GlobalStyles } from './styles/globalStyle';
import { Footer, Header } from './components';

const HomePage = lazy(() => import('./pages'));
const Earphones = lazy(() => import('./pages/products/earphones'));
const Headphones = lazy(() => import('./pages/products/headphones'));
const Speakers = lazy(() => import('./pages/products/speakers'));
const SingleProductPage = lazy(() => import('./pages/product'));
const NotFound = lazy(() => import('./pages/404'));

function App() {
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
                           path='/products/earphones'
                           element={<Earphones />}
                        />
                        <Route
                           exact
                           path='/products/speakers'
                           element={<Speakers />}
                        />
                        <Route
                           exact
                           path='/products/headphones'
                           element={<Headphones />}
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
