import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root{
        --primary-color: #FFFFFF;
        --secondary-color: #011627;
        --tertiary-color: #FF9F1C;
        --quaternary-color: #2EC4B6;

        --font-title: 45px;
        --font-text: 16px
    }
    body {
     
        background: var(--primary-color);
        font-family:Ubuntu, Sans-Serif;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`;
