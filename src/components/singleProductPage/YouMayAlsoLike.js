import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from '../../styles/theme';
import Button from '../shared/Button';

const YouMayAlsoLike = ({ relatedProducts }) => {
   return (
      <YouMayAlsoLikeWrap className='container'>
         <h2>You May Also Like</h2>

         <div className='box_items'>
            <ul>
               {relatedProducts?.map((product, index) => {
                  const {
                     image: { mobile, tablet, desktop },
                     name,
                     slug,
                  } = product;
                  return (
                     <li key={index}>
                        <div className='image'>
                           <img src={mobile} alt={name} className='mobile' />
                           <img src={tablet} alt={name} className='tablet' />
                           <img src={desktop} alt={name} className='desktop' />
                        </div>
                        <h3>{name}</h3>
                        <Link to={`/product/${slug}`}>
                           <Button colored='true' text='See Product' />
                        </Link>
                     </li>
                  );
               })}
            </ul>
         </div>
      </YouMayAlsoLikeWrap>
   );
};

export default YouMayAlsoLike;

const YouMayAlsoLikeWrap = styled.section`
   padding: 4rem 0;
   text-align: center;

   h2 {
      margin-bottom: 3rem;
   }

   p {
      white-space: pre-wrap;
   }

   ul {
      display: grid;
      gap: 3rem;

      li {
         h3 {
            margin: 1.5rem 0;
         }
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      padding: 6rem 0;

      h2 {
         margin-bottom: 4rem;
      }

      ul {
         grid-template-columns: repeat(3, 1fr);
         justify-content: center;
         gap: 1rem;

         li {
            h3 {
               margin: 2rem 0;
            }
         }
      }
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      padding: 7rem 0;

      h2 {
         margin-bottom: 5rem;
      }

      ul {
         li {
            h3 {
               font-size: 1.75rem;
               margin: 2.5rem 0;
            }
         }
      }
   }

   @media screen and (min-width: ${breakpoints.large}) {
      padding: 8rem 0;
   }
`;
