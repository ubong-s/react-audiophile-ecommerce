import styled from 'styled-components';
import Logo from './Logo';
import { categories } from '../../constants/menuNav';
import { Link } from 'react-router-dom';
import { breakpoints } from '../../styles/theme';
import { socials } from '../../constants/socials';

const Footer = () => {
   return (
      <FooterWrap>
         <FooterInner className='container'>
            <div className='orange-bar'></div>
            <FooterBox>
               <Logo />
               <FooterNav>
                  <li>
                     <Link to='/'>Home</Link>
                  </li>
                  {categories.map((category) => (
                     <li key={category.id}>
                        <Link to={category.link}>{category.title}</Link>
                     </li>
                  ))}
               </FooterNav>
            </FooterBox>
            <FooterBox>
               <p>
                  Audiophile is an all in one stop to fulfill your audio needs.
                  We're a small team of music lovers and sound specialists who
                  are devoted to helping you get the most out of personal audio.
                  Come and visit our demo facility - we’re open 7 days a week.
               </p>

               <Social className='desktop'>
                  {socials.map((social) => (
                     <li key={social.id}>
                        <a href={`https://${social.link}`}>
                           <img src={social.image} alt={social.title} />
                        </a>
                     </li>
                  ))}
               </Social>
            </FooterBox>

            <CopyrightSocial>
               <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
               <Social className='mobile'>
                  {socials.map((social) => (
                     <li key={social.id}>
                        <a href={`https://${social.link}`}>
                           <img src={social.image} alt={social.title} />
                        </a>
                     </li>
                  ))}
               </Social>
            </CopyrightSocial>
         </FooterInner>
      </FooterWrap>
   );
};

export default Footer;

const FooterWrap = styled.footer`
   background-color: ${(props) => props.theme.black};

   text-align: center;

   p {
      color: ${(props) => props.theme.light_gray};
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      text-align: left;
   }
`;
const FooterInner = styled.div`
   position: relative;
   display: grid;
   gap: 3rem;
   padding: 4rem 0 2rem;

   .orange-bar {
      position: absolute;
      top: 0;
      left: 50%;
      background-color: ${(props) => props.theme.accent};
      transform: translateX(-50%);
      height: 5px;
      width: 110px;
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      .orange-bar {
         left: 0;

         transform: translateX(0);

         width: 110px;
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      padding: 6rem 0 3rem;
   }
`;

const FooterBox = styled.div`
   display: flex;
   flex-direction: column;
   gap: 3rem;

   @media screen and (min-width: ${breakpoints.desktop}) {
      display: grid;
      align-items: flex-end;
      grid-template-columns: repeat(2, 1fr);
   }
`;

const FooterNav = styled.ul`
   display: flex;
   flex-direction: column;
   gap: 1.5rem;

   li {
      a {
         text-transform: uppercase;
         color: ${(props) => props.theme.white};
         font-weight: 700;
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      flex-direction: row;
      gap: 3rem;
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      justify-content: flex-end;
   }
`;

const CopyrightSocial = styled.div`
   display: flex;
   flex-direction: column;
   gap: 3rem;

   @media screen and (min-width: ${breakpoints.tablet}) {
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
      margin-top: 2rem;
   }
`;

const Social = styled.ul`
   display: flex;
   gap: 1rem;
   justify-content: center;

   &.desktop {
      display: none;
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      justify-content: flex-end;

      &.mobile {
         display: none;
      }

      &.desktop {
         display: flex;
      }
   }
`;
