import styled from 'styled-components';
import { getSize } from '../../../../../shared/styles/theme';

export const Container = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-auto-rows: 100%;
    grid-gap: ${getSize('sceneCardSpacing')}px;
    scroll-snap-type: y mandatory;

    @media (min-height: 800px) {
        grid-auto-rows: calc(50% - ${getSize('sceneCardSpacing')}px / 2);
    }
`;
