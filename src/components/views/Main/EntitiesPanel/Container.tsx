import styled from 'styled-components';
import { getSize } from '../../../shared/styles/theme';

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
    padding: ${getSize('mainPadding')}px;
    will-change: width;
`;
