import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root{
        --primary-color: #E5E5E5;
        --secondary-color: #011627;
        --tertiary-color: #FF9F1C;

        --font-title: 45px;
        --font-text: 16px
    }
    body {
        margin: 0;
        padding: 0;
        background: teal;
        font-family:Ubuntu, Sans-Serif;
    }
`;
