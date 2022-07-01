import React from 'react';
import {
   Hero,
   CategoriesGrid,
   ZX9Speaker,
   ZX7Speaker,
   BestGear,
   YX1Earphones,
} from '../components';

const HomePage = () => {
   return (
      <>
         <Hero />
         <CategoriesGrid page='true' />
         <ZX9Speaker />
         <ZX7Speaker />
         <YX1Earphones />
         <BestGear />
      </>
   );
};

export default HomePage;
