import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body, main, div, section, header, a, figure, h2, h3, p, button, span, img {
        padding: 0;
        margin: 0;
        border: 0;
        box-sizing: border-box;
        font-size: 100%;
        font-family: Arial, Helvetica, sans-serif;
        text-decoration: none;
        color: black;
        outline: none;
    }
    body {
        width: 100%;
        height: 100vh;
        background-color: #ffcb05;
    }
`;

export default GlobalStyle;
