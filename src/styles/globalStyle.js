import { createGlobalStyle, css } from 'styled-components';
import { typography, breakpoints, misc } from './theme';

const bodyStyles = css`
   font-family: ${typography.fonts.manrope};
   background: ${(props) => props.theme.bg};
   color: ${(props) => props.theme.text};
   line-height: 1.6;
   max-width: 1600px;
   font-weight: 400;
   margin: auto;
   overflow-y: scroll;

   *,
   ::after,
   ::before {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: ${typography.fonts.manrope};
   }

   main {
      min-height: 85vh;
      transition: ${misc.transition.ease};
      position: relative;

      &.menu-active {
         opacity: 0;
         height: 0;
         overflow: hidden;
      }

      &.cart-active {
         height: calc(85vh + 2px);
         overflow: hidden;
      }

      @media screen and (min-width: ${breakpoints.tablet}) {
         &.menu-active {
            opacity: unset;
            overflow: hidden;
            height: calc(85vh + 1px);

            &::after {
               position: absolute;
               content: '';
               top: 0;
               left: 0;
               width: 100%;
               height: 100%;
               background-color: rgba(0, 0, 0, 0.5);
            }
         }
      }

      @media screen and (min-width: ${breakpoints.desktop}) {
         &.menu-active {
            overflow: unset;
            height: unset;

            &::after {
               position: unset;
               content: unset;
               top: unset;
               left: unset;
               width: unset;
               height: unset;
               background-color: transparent;
               display: none;
            }
         }
      }
   }

   h1,
   h2,
   h3,
   h4,
   h5,
   h6 {
      font-weight: ${typography.weight.bold};
      letter-spacing: 1px;
      line-height: 1.1;
      text-transform: uppercase;
      color: ${(props) => props.theme.black};
      margin-bottom: 1.5rem;
   }

   h2 {
      font-size: 1.75rem;
      line-height: 1.4;

      @media screen and (min-width: ${breakpoints.tablet}) {
         font-size: 2.25rem;
         line-height: 1.2;
      }

      @media screen and (min-width: ${breakpoints.desktop}) {
         font-size: 2.5rem;
      }
   }

   p {
      font-size: 1rem;
      margin-bottom: 1rem;
      color: ${(props) => props.theme.text};
      font-weight: ${typography.weight.normal};
   }

   img {
      max-width: 100%;
   }

   ul {
      list-style-type: none;
   }

   a {
      text-decoration: none;
      letter-spacing: 0.5px;
   }

   button {
      cursor: pointer;
      border-color: transparent;
      background-color: transparent;
      outline: none;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 2px;
      transition: ${misc.transition.ease};
   }

   .container {
      width: 90%;
      margin: auto;

      @media screen and (min-width: ${breakpoints.desktop}) {
         width: 80%;
      }
   }

   .image {
      img {
         border-radius: ${misc.rounded.sm};
         width: 100%;
      }
      .desktop,
      .tablet {
         display: none;
      }

      @media screen and (min-width: ${breakpoints.tablet}) {
         .tablet {
            display: block;
         }

         .desktop,
         .mobile {
            display: none;
         }
      }

      @media screen and (min-width: ${breakpoints.desktop}) {
         .desktop {
            display: block;
         }

         .tablet,
         .mobile {
            display: none;
         }
      }
   }

   .content {
      .subheader {
         text-transform: uppercase;
         letter-spacing: 4px;
         color: ${(props) => props.theme.accent};
      }

      .desc {
         margin: 1.5rem 0 2rem;
      }

      @media screen and (min-width: ${breakpoints.tablet}) {
         .content {
            .subheader {
               letter-spacing: 8px;
            }
         }
      }
   }
`;

export const GlobalStyles = createGlobalStyle`
  html {
      scroll-behavior: smooth;
   }

   body {
      ${bodyStyles}
   }
`;
