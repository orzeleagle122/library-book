import styled from 'styled-components';
import img from '../assets/layout/main_img.jpg';

export const MainTemplateWrapper=styled.div`
    position: relative;
`;

export const GridContainer=styled.div`
    background-color:white;
    z-index:99;
    position:relative;
    bottom:-25px;
    font-family: 'Poppins', sans-serif;
    display:flex;
    justify-content:flex-start;
    min-height:100vh;
    flex-wrap:nowrap;
    margin-left:157px;
    border-top-left-radius: 50px;

    @media screen and (max-width: 480px){
        margin-left:0px;
    }
`;

export const MainContent=styled.div`
    padding: 43px 40px;
    width:100%;
`;

export const ImageWrapper=styled.div`
    width:100%;
    height:335px;    
    margin:0;
    padding:0;
    position:relative;
    /* background-image: url(${img});
    background-color: #2d3ddf;
    background-size: cover;
 background-blend-mode: multiply; */
`;

export const ImageTextContainer=styled.div`
    height:149px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:flex-start;
    position: relative;
    top: 155px;
    left: 245px;

    @media screen and (max-width: 480px){
        top: 80px;
        left: 25px;
    }


`;

export const HeaderOne=styled.h1`
    font-size:34px;
    color: white;
    font-weight: 700;
    letter-spacing:1px;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;

`;

export const SpanText=styled.span`
    font-size:14px;
    color: white;
    font-weight: 700;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

export const Image=styled.img`
    width:100%;
    object-fit: cover !important;
    height:435px;
    position: fixed;
`;

export const StyledButton=styled.button`
    border: 2px solid white;
    padding: 10px 30px;
    background: transparent;
    font-size:14px;
    color: white;
    margin-top:15px;
    font-weight: 700;
    border-radius: 12px;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;