import * as React from 'react';
import styled from 'styled-components';
import { getColor, getSize } from '../../styles/theme';
import { Title } from './Title';
import { Buttons } from './Buttons';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
    align-items: center;
    width: 100%;
    height: ${getSize('topBarHeight')}px;
    background: ${getColor('foregroundDark')};
    -webkit-app-region: drag;

    > * {
        -webkit-app-region: no-drag;
    }
`;

export const topBarTestId = 'topBarTestId';

export const TopBar: React.FC = () => (
    <Container data-test-id={topBarTestId}>
        <Title />
        <Buttons />
    </Container>
);

