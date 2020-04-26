import { createGlobalStyle } from 'styled-components';
import DMSans from '../../../assets/fonts/DMSans-Regular.ttf';
import DMSansMedium from '../../../assets/fonts/DMSans-Medium.ttf';
import { getColor } from './theme';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'DM Sans';
        src: url(${DMSans});
        font-weight: normal;
    }

    @font-face {
        font-family: 'DM Sans';
        src: url(${DMSansMedium});
        font-weight: 500;
    }

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
