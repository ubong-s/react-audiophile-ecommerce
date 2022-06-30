import React from 'react';
import { BestGear, CategoriesGrid, ZX9Speaker } from '../components';

const HomePage = () => {
   return (
      <>
         <CategoriesGrid page='true' />
         <ZX9Speaker />
         <BestGear />
      </>
   );
};

export default HomePage;
