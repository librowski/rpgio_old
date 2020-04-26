import * as React from 'react';
import { useSelector } from 'react-redux';
import {
    activeSceneNameSelector,
    scenesSelector
} from '../../../../../../store/scenes/selectors';
import { Container } from './Container';
import { SceneCard } from './SceneCard/SceneCard';

export const SceneCardsList: React.FC = () => {
    const scenes = useSelector(scenesSelector);
    const activeSceneName = useSelector(activeSceneNameSelector);

    return (
        <Container>
            {scenes.map(({ name, ...sceneProps }) => (
                <SceneCard
                    {...sceneProps}
                    key={name}
                    name={name}
                    isActive={name === activeSceneName}
                />
            ))}
        </Container>
    );
}
