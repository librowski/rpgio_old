import * as React from 'react';
import { Container } from './Container';
import { Scenes } from './Scenes/Scenes';
import { Sounds } from './Sounds/Sounds';

export const EntitiesPanel: React.FC = () => (
    <Container>
        <Scenes />
        <Sounds />
    </Container>
);
