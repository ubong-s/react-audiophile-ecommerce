import styled from 'styled-components';
import { breakpoints, misc } from '../../styles/theme';
import Button from '../shared/Button';

const ZX9Speaker = () => {
   return (
      <ZX9SpeakerWrap>
         <ZX9SpeakerInner className='container'>
            <div className='image'>
               <img
                  src='/assets/home/mobile/image-speaker-zx9.png'
                  alt='ZX9 Speaker'
                  className='mobile'
               />
               <img
                  src='/assets/home/tablet/image-speaker-zx9.png'
                  alt='ZX9 Speaker'
                  className='tablet'
               />
               <img
                  src='/assets/home/desktop/image-speaker-zx9.png'
                  alt='ZX9 Speaker'
                  className='desktop'
               />
            </div>
            <div className='content'>
               <h2>
                  ZX9 <br /> speaker
               </h2>
               <p>
                  Upgrade to premium speakers that are phenomenally built to
                  deliver truly remarkable sound.
               </p>
               <Button text='see product' />
            </div>
         </ZX9SpeakerInner>
      </ZX9SpeakerWrap>
   );
};

export default ZX9Speaker;

const ZX9SpeakerWrap = styled.section``;

const ZX9SpeakerInner = styled.div`
   display: grid;
   gap: 2rem;
   text-align: center;
   padding: 3.5rem 1.5rem;
   background-color: ${(props) => props.theme.accent};
   border-radius: ${misc.rounded.sm};
   background-image: url('/assets/home/desktop/pattern-circles.svg');
   background-size: cover;
   background-repeat: no-repeat;
   background-position: bottom 150px center;

   .image {
      img {
         width: 150px;
         margin: auto;
      }
   }

   .content {
      h2 {
         font-size: 2.25rem;
         margin-bottom: 1rem;
         color: ${(props) => props.theme.white};

         span {
            color: ${(props) => props.theme.accent};
         }
      }

      p {
         color: ${(props) => props.theme.white};
         margin-bottom: 2rem;
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      padding: 4rem 3rem;
      background-size: 150%;
      background-position: bottom center;

      .image {
         img {
            width: 200px;
            margin: auto;
         }
      }

      .content {
         padding: 0 7rem;

         h2 {
            font-size: 3rem;
         }
      }
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      grid-template-columns: repeat(2, 1fr);
      align-items: flex-end;
      text-align: left;
      padding: 5rem 6rem 0;
      overflow: hidden;
      background-size: 90%;
      background-repeat: no-repeat;
      background-position: top -50px right 250px;

      .image {
         img {
            width: 100%;
            margin-bottom: -10%;
         }
      }

      .content {
         padding: 0;
         margin-left: 4rem;
         padding-bottom: 5rem;

         h2 {
            font-size: 2.75rem;
         }
      }
   }

   @media screen and (min-width: ${breakpoints.large}) {
      padding: 7rem 9rem 0;

      .image {
         img {
            margin-bottom: -1rem;
         }
      }

      .content {
         padding-bottom: 6.5rem;

         h2 {
            font-size: 3.75rem;
         }
      }
   }
`;
