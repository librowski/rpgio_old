import * as React from 'react';
import { useSelector } from 'react-redux';
import { scenesSelector } from '../../../../../../store/scenes/selectors';
import { Container } from './Container';
import { SceneCard } from './SceneCard/SceneCard';

export const SceneCardsList: React.FC = () => {
    const scenes = useSelector(scenesSelector);

    return (
        <Container>
            {scenes.map((sceneProps) => (
                <SceneCard
                    {...sceneProps}
                    key={sceneProps.name}
                    isActive={false}
                />
            ))}
        </Container>
    );
}
