import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints, misc } from '../../styles/theme';
import Button from '../shared/Button';

const ZX7Speaker = () => {
   return (
      <ZX7SpeakerWrap>
         <ZX7SpeakerInner className='container'>
            <div className='image'>
               <img
                  src='/assets/home/mobile/image-speaker-zx7.jpg'
                  alt='ZX7 Speaker'
                  className='mobile'
               />
               <img
                  src='/assets/home/tablet/image-speaker-zx7.jpg'
                  alt='ZX7 Speaker'
                  className='tablet'
               />
               <img
                  src='/assets/home/desktop/image-speaker-zx7.jpg'
                  alt='ZX7 Speaker'
                  className='desktop'
               />
            </div>
            <div className='content'>
               <h2>ZX7 Speaker</h2>
               <Link to='/product/zx7-speaker'>
                  <Button outline='true' text='See product' />
               </Link>
            </div>
         </ZX7SpeakerInner>
      </ZX7SpeakerWrap>
   );
};

export default ZX7Speaker;

const ZX7SpeakerWrap = styled.section`
   padding: 2rem 0;

   @media screen and (min-width: ${breakpoints.tablet}) {
      padding: 3rem 0;
   }
`;

const ZX7SpeakerInner = styled.div`
   position: relative;
   border-radius: ${misc.rounded.sm};
   overflow: hidden;
   line-height: 0;

   .content {
      position: absolute;
      top: 50%;
      left: 5%;
      transform: translateY(-50%);
      z-index: 2;

      h2 {
         font-size: 2rem;
         margin-bottom: 2rem;
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      .content {
         left: 7.5%;
      }
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      .content {
         left: 10%;
      }
   }
`;
