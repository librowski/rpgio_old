import * as React from 'react';
import { Container } from './Container';
import { SceneCardList } from './SceneCardsList/SceneCardList';
import { Header } from '../../../../shared/typography/Header';

export const Scenes: React.FC = () => (
    <Container>
        <Header>
            Scenes
        </Header>
        <SceneCardList />
    </Container>
);
