import React from 'react';
import {
   CategoriesGrid,
   ZX9Speaker,
   ZX7Speaker,
   BestGear,
} from '../components';

const HomePage = () => {
   return (
      <>
         <CategoriesGrid page='true' />
         <ZX9Speaker />
         <ZX7Speaker />
         <BestGear />
      </>
   );
};

export default HomePage;