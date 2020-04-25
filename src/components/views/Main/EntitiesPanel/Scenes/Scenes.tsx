import * as React from 'react';
import { Container } from './Container';
import { SceneCardsList } from './SceneCardsList/SceneCardsList';
import { Header } from '../../../../shared/typography/Header';

export const Scenes: React.FC = () => (
    <Container>
        <Header>
            Scenes
        </Header>
        <SceneCardsList />
    </Container>
);
