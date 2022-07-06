import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const GoBackBtn = () => {
   const navigate = useNavigate();
   return (
      <GoBackBtnWrap type='button' onClick={() => navigate(-1)}>
         Go Back
      </GoBackBtnWrap>
   );
};

export default GoBackBtn;

const GoBackBtnWrap = styled.button`
   text-transform: capitalize;
   color: ${(props) => props.theme.text};

   &:hover {
      color: ${(props) => props.theme.accent};
   }
`;
