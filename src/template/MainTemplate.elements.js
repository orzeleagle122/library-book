import styled from 'styled-components';

export const GridContainer=styled.div`
    font-family: 'Poppins', sans-serif;
    display:flex;
    height:100vh;
    max-width: 100vw;
    width:100%;
    flex-wrap:nowrap;

`;

export const LeftPage=styled.div`
    border-top-right-radius: 50px;
    border: 1px solid black;
    padding: 43px 20px;
    max-width:calc(100vw / 2);
    width:100%;

`;

export const RightPage=styled.div`
    border: 1px solid black;
    border-bottom-left-radius: 50px;
    max-width:calc(100vw / 2);
    width:100%;
`;
