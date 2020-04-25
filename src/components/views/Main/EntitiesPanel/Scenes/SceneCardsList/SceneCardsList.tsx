import * as React from 'react';
import { useSelector } from 'react-redux';
import { scenesSelector } from '../../../../../../store/scenes/selectors';
import { Container } from './Container';
import { SceneCard } from './SceneCard/SceneCard';
import {
    entitiesPanelWidthSelector
} from '../../../../../../store/userData/selectors';
import { useTheme } from 'styled-components';
import { getWidth } from './SceneCard/Container';

export const SceneCardsList: React.FC = () => {
    const scenes = useSelector(scenesSelector);
    const entitiesPanelWidth = useSelector(entitiesPanelWidthSelector);
    const { sizes: { mainPadding, sceneCardSpacing } } = useTheme();

    const scenesContainerWidth = entitiesPanelWidth - 2 * mainPadding;
    const sceneCardWidth = getWidth(scenesContainerWidth, sceneCardSpacing);

    return (
        <Container
            width={scenesContainerWidth}
            sceneCardWidth={sceneCardWidth}
        >
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
