import styled from 'styled-components';
import { getColor } from '../../../../../shared/styles/theme';

export const Background = styled.div`
    z-index: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: ${getColor('foregroundDark')};
    transition: 100ms ease background;
`;
