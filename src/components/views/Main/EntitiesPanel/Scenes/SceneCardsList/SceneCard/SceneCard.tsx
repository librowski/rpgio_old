import * as React from 'react';
import { Container } from './Container';
import { Scene } from '../../../../../../../store/scenes/types';
import { NameBar } from './NameBar';
import { playScene } from '../../../../../../../store/scenes/scenes';
import { useDispatch } from 'react-redux';
import { Background } from './Background';
import { SortableElement } from 'react-sortable-hoc';

type Props =
    & React.ComponentProps<typeof Background>
    & Scene;

const SceneCard: React.FC<Props> = ({
    name,
    isActive,
    imageURL,
    isDragging,
    ...rest
}) => {
    const dispatch = useDispatch();
    const onClick = React.useCallback(
        () => dispatch(playScene(name)),
        [name, dispatch]
    );

    return (
        <Container onClick={onClick} {...rest}>
            <Background
                isDragging={isDragging}
                imageURL={imageURL}
                isActive={isActive}
            />
            <NameBar isActive={isActive}>{ name }</NameBar>
        </Container>
    );
}

const SortableSceneCard = SortableElement(SceneCard);
export { SortableSceneCard as SceneCard };
