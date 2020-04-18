import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html, body, #root {
        margin: 0;
        padding: 0;
        height: 100vh;
        width: 100vw;
        border-radius: 12px;
        background: transparent;
        overflow: hidden;
    }
`;
