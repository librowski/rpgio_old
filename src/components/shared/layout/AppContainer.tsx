import * as React from 'react';
import styled from 'styled-components';
import { TopBar } from './TopBar';

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const AppContainer: React.FC = ({ children }) => (
    <Container>
        <TopBar />
        { children }
    </Container>
);

