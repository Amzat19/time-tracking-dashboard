import styled from "styled-components";

export const AppStyles = styled.div`
display: grid;
justify-content: center;
grid-template-columns: repeat(4, minmax(100px,200px));
grid-template-rows: repeat(2, minmax(100px, 170px));
grid-gap: 60px;
padding: 100px 0;

@media (max-width: 760px) {
     display: flex;
     flex-direction: column;
     width: 60%;
     margin: auto;

     .Jeremy {
       display: flex;
     }
     
     .Jeremy-report {
       padding: 30px 0px 0px 15px;
       
     }

     .Jeremy-report > h2{
      font-weight: 300 !important;
     }

     .p {
       display: grid;
       grid-template-columns: auto auto auto;


     }
 }
`;