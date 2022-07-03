import { Helmet } from 'react-helmet';

const Seo = ({ title, description }) => {
   return (
      <Helmet>
         <title>{title ? `${title} | Audiophile` : 'Audiophile'} </title>
         <meta
            name='description'
            content={
               description || 'Frontend Mentor - Audiophile e-commerce website'
            }
         />
      </Helmet>
   );
};

export default Seo;
