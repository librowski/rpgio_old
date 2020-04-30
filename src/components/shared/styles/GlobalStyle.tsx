import { createGlobalStyle } from 'styled-components';
import { getColor } from './theme';
import './fonts.css';

export const GlobalStyle = createGlobalStyle`
    html, body, #root {
        margin: 0;
        padding: 0;
        height: 100vh;
        width: 100vw;
        background: transparent;
        overflow: hidden;
        font-family: 'DM Sans', sans-serif;
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    ::-webkit-scrollbar {
        width: 6px;
    }

    ::-webkit-scrollbar-track {
        background: ${getColor('scrollbarTrack')};
    }

    ::-webkit-scrollbar-thumb {
        background: ${getColor('scrollbarThumb')};
    }
`;
