import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints, misc } from '../../styles/theme';
import { closeMenu } from '../../redux_toolkit/features/globalSlice';
import { categories } from '../../constants/menuNav';

const CategoriesGrid = ({ click, page }) => {
   const dispatch = useDispatch();
   return (
      <div className='container'>
         <CategoriesGridWrap className={page ? 'page' : null}>
            {categories.map((category) => (
               <CategoryItem
                  key={category.id}
                  onClick={click ? () => dispatch(closeMenu()) : null}
               >
                  <Link to={category.link}>
                     <img src={category.image} alt={category.title} />
                     <h4>{category.title}</h4>
                     <button>
                        Shop
                        <span className='icon'>
                           <svg
                              width='8'
                              height='12'
                              xmlns='http://www.w3.org/2000/svg'
                           >
                              <path
                                 d='M1.322 1l5 5-5 5'
                                 stroke='#D87D4A'
                                 strokeWidth='2'
                                 fill='none'
                                 fillRule='evenodd'
                              />
                           </svg>
                        </span>
                     </button>
                  </Link>
               </CategoryItem>
            ))}
         </CategoriesGridWrap>
      </div>
   );
};

export default CategoriesGrid;

const CategoriesGridWrap = styled.ul`
   display: grid;
   gap: 1rem;

   &.page {
      padding: 3rem 0 8rem;
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      grid-template-columns: repeat(3, 1fr);

      &.page {
         padding: 5rem 0 7rem;
      }
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      &.page {
         padding: 6rem 0 9rem;
      }
   }
`;

const CategoryItem = styled.li`
   position: relative;
   text-align: center;
   padding: 1rem 2rem 2rem;

   &::after {
      position: absolute;
      content: '';
      top: 25%;
      left: 0;
      width: 100%;
      height: 75%;
      background-color: ${(props) => props.theme.gray};
      border-radius: ${misc.rounded.sm};
   }

   a {
      position: relative;
      z-index: 1;
   }

   img {
      width: 150px;
      height: 150px;
   }

   h4 {
      margin-bottom: 1rem;
   }

   button {
      color: ${(props) => props.theme.text};
      line-height: 0;

      &:hover {
         color: ${(props) => props.theme.accent};
      }

      .icon {
         display: inline-flex;
         align-items: center;
         margin-left: 0.5rem;
         line-height: 0;
      }
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      img {
         width: 200px;
         height: 200px;
      }
   }
`;
