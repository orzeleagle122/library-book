import styled from 'styled-components';

export const GridContainer=styled.div`
    font-family: 'Poppins', sans-serif;
    display:grid;
    grid-template-columns:1fr 1fr;
    height:100vh;
`;

export const LeftPage=styled.div`
    border-top-right-radius: 50px;
    border: 1px solid black;
    padding: 43px 20px;

`;

export const RightPage=styled.div`
    border: 1px solid black;
    border-bottom-left-radius: 50px;
`;
