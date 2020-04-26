import styled from 'styled-components';
import { getColor, getSize } from '../../../../../../shared/styles/theme';

export const NameBar = styled.div`
    width: 100%;
    height: ${getSize('sceneNameBarHeight')}px;
    padding-left: 8px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: ${getColor('foregroundDark')};
    z-index: 1;
`;
