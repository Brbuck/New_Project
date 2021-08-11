import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  html {
    min-height: 100%;
    background: var(--color-white);
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: 'Montserrat', -apple-system,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
  }
  :root {
    --color-primary: #f7f7f7;
    --color-black: #333;
    --color-white: #FFF;
    --color-gray: #5c5f60;
    --color-blue: #002C63;
    --color-light-blue: #849bfb;
    --color-red: #B22222;
    --color-yellow: #FFD700;
    --color-orange: #faa74a;

    --color-botao: #FFD862;
    --color-hover-botao: #f6eda9;
    --color-header: #Fff;
    --color-painel: #0c3a84;
    --color-border: #ddd;

    --color-hover: #FFFAFA;
    --color-hover-card: #E8E8E8;
    --reputation-2: #004685;
    --reputation-3: #FFFDE5;
    --reputation-5: #00A650;

    --panel-shadow: 0 1px 3px 0 rgba(0,0,0,.3);
  }
`;
