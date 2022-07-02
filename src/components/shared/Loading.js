import styled from 'styled-components';

const Loading = () => {
   return (
      <LoadingWrap>
         <div className='container'>
            <div className='lds-ripple'>
               <div></div>
               <div></div>
            </div>
         </div>
      </LoadingWrap>
   );
};

export default Loading;

const LoadingWrap = styled.div`
   display: grid;
   height: 100vh;
   align-items: center;
   justify-items: center;

   .lds-ripple {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;

      div {
         position: absolute;
         border: 4px solid ${(props) => props.theme.accent};
         opacity: 1;
         border-radius: 50%;
         animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
      }

      div:nth-child(2) {
         animation-delay: -0.5s;
      }
   }

   @keyframes lds-ripple {
      0% {
         top: 36px;
         left: 36px;
         width: 0;
         height: 0;
         opacity: 0;
      }
      4.9% {
         top: 36px;
         left: 36px;
         width: 0;
         height: 0;
         opacity: 0;
      }
      5% {
         top: 36px;
         left: 36px;
         width: 0;
         height: 0;
         opacity: 1;
      }
      100% {
         top: 0px;
         left: 0px;
         width: 72px;
         height: 72px;
         opacity: 0;
      }
   }
`;
