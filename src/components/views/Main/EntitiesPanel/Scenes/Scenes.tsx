import { Header } from '@components/shared/typography/Header';
import * as React from 'react';
import { Container } from './Container';
import { SceneCardList } from './SceneCardsList/SceneCardList';

export const Scenes: React.FC = () => (
    <Container>
        <Header>
            Scenes
        </Header>
        <SceneCardList />
    </Container>
);
