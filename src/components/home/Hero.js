import styled from 'styled-components';
import { breakpoints } from '../../styles/theme';
import Button from '../shared/Button';
import { Link } from 'react-router-dom';

const Hero = () => {
   return (
      <HeroWrap>
         <div className='image'>
            <img
               src='/assets/home/mobile/image-header.jpg'
               alt='XX99 Mark II Headphone'
               className='mobile'
            />
            <img
               src='/assets/home/tablet/image-header.jpg'
               alt='XX99 Mark II Headphone'
               className='tablet'
            />
            <img
               src='/assets/home/desktop/image-hero.jpg'
               alt='XX99 Mark II Headphone'
               className='desktop'
            />
         </div>
         <div className='content'>
            <p className='subheader'>New product</p>
            <h1>
               XX99 Mark II <br /> Headphones
            </h1>
            <p className='hero-desc'>
               Experience natural, lifelike audio and exceptional build quality
               made for the passionate music enthusiast.
            </p>
            <Link to='/product/xx99-mark-two-headphones'>
               <Button text='See product' colored='true' />
            </Link>
         </div>
      </HeroWrap>
   );
};

export default Hero;

const HeroWrap = styled.section`
   margin-top: -91px;
   position: relative;

   .image {
      img {
         border-radius: 0;
      }
   }

   .content {
      position: absolute;
      left: 50%;
      top: 55%;
      width: 80%;
      transform: translate(-50%, -50%);
      text-align: center;

      .subheader,
      .hero-desc,
      h1 {
         color: ${(props) => props.theme.white};
      }

      .subheader {
         color: ${(props) => props.theme.light_gray};
         text-transform: uppercase;
         letter-spacing: 6px;
      }

      h1 {
         font-size: 2.25rem;
         margin: 1rem 0 1.5rem;
      }

      .hero-desc {
         color: ${(props) => props.theme.light_gray};
         margin-bottom: 2rem;
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      .content {
         top: 55%;
         width: 50%;

         .subheader {
            letter-spacing: 12px;
         }

         h1 {
            font-size: 3rem;
            margin: 1rem 0 1.5rem;
         }

         .hero-desc {
            margin-bottom: 3rem;
         }
      }
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      .content {
         position: absolute;
         left: 10%;
         top: 55%;
         width: 35%;
         transform: translate(0, -50%);
         text-align: left;

         .subheader {
            letter-spacing: 8px;
         }
      }
   }
   @media screen and (min-width: ${breakpoints.large}) {
      .content {
         width: 30%;

         h1 {
            font-size: 3.5rem;
         }

         .hero-desc {
            margin-bottom: 3rem;
         }
      }
   }
`;
const HeroInner = styled.div``;
