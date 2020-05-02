import styled from 'styled-components';
import { getSize } from '../../../../shared/styles/theme';

export const Container = styled.div`
    position: relative;
    margin-top: ${getSize('mainPadding')}px;
    max-height: calc(33.33% - ${getSize('mainPadding')}px);
    width: fit-content;
    display: flex;
    flex-direction: column;
`;
