import { css } from 'styled-components';
import { getColor } from './theme';

export const scrollbarStyles = css`
    ::-webkit-scrollbar {
        width: 4px;
        border-radius: 2px;
    }

    ::-webkit-scrollbar-track {
        background: ${getColor('scrollbarTrack')};
    }

    ::-webkit-scrollbar-thumb {
        background: ${getColor('scrollbarThumb')};
    }
`;
