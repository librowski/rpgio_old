import * as React from 'react';
import { Container } from './Container';
import { Scenes } from './Scenes/Scenes';
import { Sounds } from './Sounds/Sounds';
import { Actions } from './Actions/Actions';

export const EntitiesPanel: React.FC = () => (
    <Container>
        <Scenes />
        <Sounds />
        <Actions />
    </Container>
);
