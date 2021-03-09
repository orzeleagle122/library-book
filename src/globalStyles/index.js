import {createGlobalStyle} from 'styled-components';


const GlobalStyle=createGlobalStyle`
    *,*::before,*::after{
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
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

export default GlobalStyle