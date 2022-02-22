import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }

    body, html {
        font-size: 16px;
        margin: 0;
        padding: 0;
        width: 100%;
        background: #f2f2f2;
        font-family: 'Roboto', sans-serif;


        @media only screen and (max-width: 768px) {
            font-size: 15px;
        }
        @media only screen and (max-width: 425px) {
            font-size: 14px;
        }
    } 

    
`;
