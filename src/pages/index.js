import { motion } from 'framer-motion';
import { fadeIn } from '../animations';
import {
   Hero,
   CategoriesGrid,
   ZX9Speaker,
   ZX7Speaker,
   BestGear,
   YX1Earphones,
   Seo,
} from '../components';

const HomePage = () => {
   return (
      <motion.div
         variants={fadeIn}
         initial='initial'
         animate='animate'
         exit='exit'
      >
         <Seo />
         <Hero />
         <CategoriesGrid page='true' />
         <ZX9Speaker />
         <ZX7Speaker />
         <YX1Earphones />
         <BestGear />
      </motion.div>
   );
};

export default HomePage;
