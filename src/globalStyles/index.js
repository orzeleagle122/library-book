import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,*::before,*::after{
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin:0px;
        padding:0px;
    }

    html{
        margin:0px;
        padding:0px;
    }

    body {
        font-family: 'Poppins', sans-serif;
        /* margin-left: 157px; */
        /* max-width: 2200px; */

        /* scroll fix position fixed chrome */
        /* overflow:scroll; */
        h2 {
    font-size: 20px;
    margin-top: 36px;
    margin-bottom: 20px;
    font-weight: 700;
    letter-spacing: 1px;
    position: relative;
  }
    }

    /* 
    
    html {
        font-size: 100%; // 1rem === 16px, ustalenie wielkosci jednostki rem na 10px
    }
    body {
        font-size: 1.6rem; //ale bazowa wielkosc to 16 px ----- happy rems
        
    } 
    
    */
`;

export default GlobalStyle;
