import styled from 'styled-components';
import { getSize } from '../../../shared/styles/theme';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    padding: ${getSize('mainPadding')}px;
`;
