import * as React from 'react';
import styled from 'styled-components';
import { EntitiesPanel } from './EntitiesPanel/EntitiesPanel';
import { Sidebar } from './Sidebar/Sidebar';

const Container = styled.div`
    position: relative;
    display: flex;
    height: 100%;
    width: 100%;
`;

export const Main: React.FC = () => (
    <Container>
        <EntitiesPanel />
        <Sidebar />
    </Container>
);
