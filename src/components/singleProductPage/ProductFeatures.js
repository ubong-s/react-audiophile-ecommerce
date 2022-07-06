import styled from 'styled-components';
import { breakpoints, typography } from '../../styles/theme';

const ProductFeatures = ({ features, box_items = [] }) => {
   return (
      <ProductFeaturesWrap className='container'>
         <div className='features'>
            <h2>Features</h2>
            <p>{features}</p>
         </div>

         <div className='box_items'>
            <h2>In the box</h2>
            <ul>
               {box_items.length > 0 &&
                  box_items?.map((item, index) => (
                     <li key={index}>
                        <span>{item.quantity}X</span> {item.item}
                     </li>
                  ))}
            </ul>
         </div>
      </ProductFeaturesWrap>
   );
};

export default ProductFeatures;

const ProductFeaturesWrap = styled.section`
   padding: 6rem 0;
   display: grid;
   gap: 4rem;

   p {
      white-space: pre-wrap;
   }

   ul {
      li {
         margin-bottom: 1rem;

         span {
            color: ${(props) => props.theme.accent};
            margin-right: 1.5rem;
            font-weight: ${typography.weight.bold};
         }
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      padding: 8rem 0;
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      gap: 6rem;
      grid-template-columns: 2fr 1fr;
   }
   @media screen and (min-width: ${breakpoints.large}) {
      gap: 9rem;
   }
`;
