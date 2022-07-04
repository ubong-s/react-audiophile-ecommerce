import styled from 'styled-components';

const BlackBar = () => {
   return <BlackBarWrap></BlackBarWrap>;
};

export default BlackBar;

const BlackBarWrap = styled.div`
   height: 91px;
   background-color: ${(props) => props.theme.black};
   margin-top: -91px;
`;
