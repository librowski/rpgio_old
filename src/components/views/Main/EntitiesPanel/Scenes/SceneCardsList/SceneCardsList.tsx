import * as React from 'react';
import { useSelector } from 'react-redux';
import { scenesSelector } from '../../../../../../store/scenes/selectors';
import { Container } from './Container';
import { SceneCard } from './SceneCard/SceneCard';
import {
    entitiesPanelWidthSelector
} from '../../../../../../store/userData/selectors';
import { useTheme } from 'styled-components';

export const SceneCardsList: React.FC = () => {
    const scenes = useSelector(scenesSelector);
    const entitiesPanelWidth = useSelector(entitiesPanelWidthSelector);
    const { sizes: { mainPadding } } = useTheme();

    const scenesContainerWidth = entitiesPanelWidth - 2 * mainPadding;

    return (
        <Container width={scenesContainerWidth}>
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
