import React from 'react';
import styled, { css } from 'styled-components';
import { misc } from '../../styles/theme';

const Button = ({ text = 'Click here', outline, colored }) => {
   return (
      <ButtonWrap outline={outline} colored={colored} type='button'>
         {text}
      </ButtonWrap>
   );
};

export default Button;

const ButtonWrap = styled.button`
   border: ${(props) => props.theme.black} 2px solid;
   background-color: ${(props) => props.theme.black};
   color: ${(props) => props.theme.white};
   padding: 1rem 2.5rem;
   transition: ${misc.transition.ease};

   &:hover {
      background-color: transparent;
      color: ${(props) => props.theme.black};
   }

   ${(props) =>
      props.outline &&
      css`
         background-color: transparent;
         color: ${(props) => props.theme.black};

         &:hover {
            background-color: ${(props) => props.theme.black};
            color: ${(props) => props.theme.white};
         }
      `}

   ${(props) =>
      props.colored &&
      css`
         background-color: ${(props) => props.theme.accent};
         color: ${(props) => props.theme.white};
         border: ${(props) => props.theme.accent} 2px solid;

         &:hover {
            border: ${(props) => props.theme.accent_light} 2px solid;
            background-color: ${(props) => props.theme.accent_light};
            color: ${(props) => props.theme.white};
         }
      `}
`;
