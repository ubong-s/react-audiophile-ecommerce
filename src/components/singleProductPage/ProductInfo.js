import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints, misc, typography } from '../../styles/theme';

const ProductInfo = ({ name, image, newProduct, description, price }) => {
   const navigate = useNavigate();

   return (
      <ProductInfoWrap className='container'>
         <button
            type='button'
            className='go-back-btn'
            onClick={() => navigate(-1)}
         >
            Go Back
         </button>
         <div className='info-btm'>
            {image ? (
               <div className='image'>
                  <img src={image.mobile} alt={name} className='mobile' />
                  <img src={image.tablet} alt={name} className='tablet' />
                  <img src={image.desktop} alt={name} className='desktop' />
               </div>
            ) : null}

            <div className='content'>
               {newProduct ? <p className='subheader'>New product </p> : null}
               <h1>{name}</h1>
               <p className='desc'>{description}</p>
               <p className='price'>${new Intl.NumberFormat().format(price)}</p>

               <AddToCart>
                  <div className='quantity'>
                     <button className='qty-btn'>-</button>
                     <span className='qty'>1</span>
                     <button className='qty-btn'>+</button>
                  </div>
                  <button type='submit' className='add-btn'>
                     Add to Cart
                  </button>
               </AddToCart>
            </div>
         </div>
      </ProductInfoWrap>
   );
};

export default ProductInfo;

const ProductInfoWrap = styled.section`
   padding-top: 5rem;

   .go-back-btn {
      text-transform: capitalize;
      color: ${(props) => props.theme.text};
   }

   .info-btm {
      display: grid;
      gap: 3rem;
      margin-top: 2rem;

      .content {
         h1 {
            font-size: 2rem;
         }

         .price {
            font-weight: ${typography.weight.bold};
            color: ${(props) => props.theme.black};
            font-size: 1.25rem;
         }
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      .info-btm {
         grid-template-columns: 1fr 1.3fr;
         gap: 4rem;
         align-items: center;
         margin-top: 3rem;
      }
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      .info-btm {
         grid-template-columns: 1.25fr 1fr;
         gap: 6rem;

         .content {
            h1 {
               font-size: 2.5rem;
            }
         }
      }
   }
`;

const AddToCart = styled.div`
   display: flex;
   align-items: center;
   gap: 1rem;
   margin-top: 2rem;

   input {
      height: 100%;
      outline: none;
      border: none;
      padding: 1rem;
      background: ${(props) => props.theme.light_gray};
      color: ${(props) => props.theme.grey_dark};
   }

   .quantity {
      display: flex;
      align-items: center;
      background-color: ${(props) => props.theme.gray};
      font-weight: ${typography.weight.bold};

      .qty-btn {
         padding: 1rem 1.25rem;
         color: ${(props) => props.theme.text};

         &:hover {
            color: ${(props) => props.theme.accent};
            transition: ${misc.transition.ease};
         }
      }

      .qty {
         padding: 1rem 1.25rem;
         line-height: 0;
         height: 100%;
         color: ${(props) => props.theme.black};
      }
   }

   .add-btn {
      background-color: ${(props) => props.theme.accent};
      color: ${(props) => props.theme.white};
      border: ${(props) => props.theme.accent} 2px solid;
      padding: 1rem 2.5rem;
      transition: ${misc.transition.ease};
      text-transform: uppercase;

      &:hover {
         background-color: transparent;
         color: ${(props) => props.theme.accent};
      }
   }
`;
