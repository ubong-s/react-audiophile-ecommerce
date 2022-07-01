import styled from 'styled-components';
import { breakpoints, misc } from '../../styles/theme';
import Button from '../shared/Button';

const YX1Earphones = () => {
   return (
      <YX1EarphonesWrap>
         <YX1EarphonesInner className='container'>
            <div className='image'>
               <img
                  src='/assets/home/mobile/image-earphones-yx1.jpg'
                  alt='ZX7 Speaker'
                  className='mobile'
               />
               <img
                  src='/assets/home/tablet/image-earphones-yx1.jpg'
                  alt='ZX7 Speaker'
                  className='tablet'
               />
               <img
                  src='/assets/home/desktop/image-earphones-yx1.jpg'
                  alt='ZX7 Speaker'
                  className='desktop'
               />
            </div>
            <div className='content'>
               <div>
                  <h2>YX1 Earphones</h2>
                  <Button outline='true' text='See product' />
               </div>
            </div>
         </YX1EarphonesInner>
      </YX1EarphonesWrap>
   );
};

export default YX1Earphones;

const YX1EarphonesWrap = styled.section``;
const YX1EarphonesInner = styled.div`
   display: grid;
   gap: 2rem;

   .content {
      background-color: ${(props) => props.theme.gray};
      border-radius: ${misc.rounded.sm};
      height: 225px;
      display: grid;
      align-items: center;
      padding-left: 2rem;

      h2 {
         font-size: 2rem;
         margin-bottom: 2rem;
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;

      .content {
         height: auto;
      }
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      gap: 2rem;

      .content {
         padding-left: 20%;
      }
   }
`;
