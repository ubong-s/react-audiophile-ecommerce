import React from 'react';
import styled, { css } from 'styled-components';
import { misc } from '../../styles/theme';

const Button = ({ text = 'Click here', outline }) => {
   return (
      <ButtonWrap outline={outline} type='button'>
         {text}
      </ButtonWrap>
   );
};

export default Button;

const ButtonWrap = styled.button`
   border: ${(props) => props.theme.black} 2px solid;
   padding: 0.75rem 2.5rem;
   background-color: ${(props) => props.theme.black};
   color: ${(props) => props.theme.white};
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
      `}
`;
