import styled from 'styled-components';
import { breakpoints } from '../../styles/theme';

const PageHeader = ({ title = 'Header' }) => {
   return (
      <PageHeaderWrap>
         <div className='container'>
            <h1>{title}</h1>
         </div>
      </PageHeaderWrap>
   );
};

export default PageHeader;

const PageHeaderWrap = styled.section`
   margin-top: -91px;
   background-color: ${(props) => props.theme.black};
   height: 300px;
   padding-top: 91px;
   display: grid;
   align-items: center;
   justify-items: center;
   text-align: center;

   h1 {
      color: ${(props) => props.theme.white};
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      h1 {
         font-size: 2.5rem;
      }
   }
`;
