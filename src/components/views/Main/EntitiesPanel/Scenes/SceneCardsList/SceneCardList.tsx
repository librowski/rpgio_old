import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    activeSceneNameSelector,
    scenesSelector
} from '../../../../../../store/scenes/selectors';
import { Container } from './Container';
import { SceneCard } from './SceneCard/SceneCard';
import { SortableContainer, SortEndHandler } from 'react-sortable-hoc';
import { reorderScene } from '../../../../../../store/scenes/scenes';
import { setDragging } from '../../../../../../store/userData/userData';
import { uiDataSelector } from '../../../../../../store/userData/selectors';

const SortableCardsContainer = SortableContainer(() => {
    const scenes = useSelector(scenesSelector);
    const activeSceneName = useSelector(activeSceneNameSelector);
    const { isDragging } = useSelector(uiDataSelector);

    return (
        <Container>
            {scenes.map(({ name, ...sceneProps }, index) => (
                <SceneCard
                    {...sceneProps}
                    index={index}
                    isDragging={isDragging}
                    key={name}
                    name={name}
                    isActive={name === activeSceneName}
                />
            ))}
        </Container>
    );
});

export const SceneCardList: React.FC = () => {
    const dispatch = useDispatch();

    const onSortStart = React.useCallback(() => {
        dispatch(setDragging(true));
    }, [dispatch]);

    const onSortEnd = React.useCallback<SortEndHandler>(
        ({ oldIndex, newIndex }) => {
            dispatch(reorderScene({ oldIndex, newIndex }));
            dispatch(setDragging(false));
        },
        [dispatch]
    );

    return (
        <SortableCardsContainer
            axis={'xy'}
            pressDelay={100}
            onSortStart={onSortStart}
            onSortEnd={onSortEnd}
        />
    );
}

