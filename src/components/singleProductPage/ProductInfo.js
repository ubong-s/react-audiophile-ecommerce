import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addToCart } from '../../redux_toolkit/features/cartSlice';
import { breakpoints, misc, typography } from '../../styles/theme';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoBackBtn from '../shared/GoBackBtn';

const ProductInfo = ({ product }) => {
   const dispatch = useDispatch();
   const { id, slug, name, nickname, image, newProduct, description, price } =
      product;
   const [quantity, setQuantity] = useState(1);

   let minQty = 1;
   let maxQty = 10;

   const changeQty = (e) => {
      let status = e.target.dataset.qty;

      if (status === 'increase' && quantity < maxQty) {
         setQuantity((prev) => prev + 1);
      }
      if (status === 'decrease' && quantity > minQty) {
         setQuantity((prev) => prev - 1);
      }
   };

   const notify = (name) => toast(`${name}  added to cart`);

   useEffect(() => {
      setQuantity(1);
   }, []);

   return (
      <ProductInfoWrap className='container'>
         <GoBackBtn />
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
                  <div
                     className={
                        quantity === maxQty
                           ? 'quantity limit-active'
                           : 'quantity'
                     }
                  >
                     <button
                        data-qty='decrease'
                        className='qty-btn'
                        onClick={changeQty}
                        disabled={quantity === minQty}
                     >
                        -
                     </button>
                     <span className='qty'>{quantity}</span>
                     <button
                        data-qty='increase'
                        className='qty-btn'
                        onClick={changeQty}
                        disabled={quantity === maxQty}
                     >
                        +
                     </button>
                  </div>
                  <button
                     className='add-btn'
                     onClick={() => {
                        dispatch(addToCart({ id, slug, product, quantity }));
                        notify(nickname);
                     }}
                  >
                     Add to Cart
                  </button>
               </AddToCart>
            </div>
         </div>
         <ToastContainer
            position='bottom-left'
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            transition={Zoom}
         />
      </ProductInfoWrap>
   );
};

export default ProductInfo;

const ProductInfoWrap = styled.section`
   padding-top: 5rem;

   /* .Toastify__toast-container {
      padding-top: 90px;
   } */

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
      transition: ${misc.transition.ease};
      border: transparent 1px solid;
      height: 3.5rem;

      .qty-btn {
         padding: 0 1rem;
         color: ${(props) => props.theme.text};
         font-size: 1rem;

         &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
         }

         &:hover {
            color: ${(props) => props.theme.accent};
            transition: ${misc.transition.ease};
         }
      }

      .qty {
         display: flex;
         align-items: center;
         padding: 0 0.5rem;
         height: 100%;
         color: ${(props) => props.theme.black};
      }

      &.limit-active {
         border: ${(props) => props.theme.accent} 1px solid;
      }
   }

   .add-btn {
      background-color: ${(props) => props.theme.accent};
      color: ${(props) => props.theme.white};
      border: ${(props) => props.theme.accent} 2px solid;
      padding: 0 2rem;
      transition: ${misc.transition.ease};
      text-transform: uppercase;
      margin: 1px;
      height: 3.5rem;

      &:hover {
         background-color: transparent;
         color: ${(props) => props.theme.accent};
      }
   }
`;
