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
   }

   h1,
   h2,
   h3,
   h4,
   h5,
   h6 {
      font-weight: ${typography.weight.bold};
      letter-spacing: 0.5px;
      line-height: 1.3;
      text-transform: uppercase;
      color: ${(props) => props.theme.black};
   }

   p {
      font-size: 1rem;
      margin-bottom: 1rem;
      color: ${(props) => props.theme.text};
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

   input,
   textarea {
      width: 100%;
      border-radius: ${misc.rounded.sm};
      padding: 1rem;
      outline: none;
      border: none;
      /* background: ${(props) => props.theme.grey_light};
      color: ${(props) => props.theme.grey_dark}; */
   }

   button {
      cursor: pointer;
      border-color: transparent;
      background-color: transparent;
      outline: none;
      text-transform: uppercase;
      font-weight: 700;
   }

   .container {
      width: 90%;
      margin: auto;

      @media screen and (min-width: ${breakpoints.desktop}) {
         width: 80%;
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
