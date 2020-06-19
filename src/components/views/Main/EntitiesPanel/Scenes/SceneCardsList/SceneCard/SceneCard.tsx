import * as React from 'react';
import { Container } from './Container';
import { Scene } from '@store/scenes/types';
import { NameBar } from './NameBar';
import {
    pauseActiveScene,
    playScene
} from '@store/scenes/scenes';
import { useDispatch } from 'react-redux';
import { Background } from './Background';
import { SortableElement } from 'react-sortable-hoc';

type Props =
    & React.ComponentProps<typeof Background>
    & Scene;

const Card: React.FC<Props> = ({
    name,
    isActive,
    imageURL,
    ...rest
}) => {
    const dispatch = useDispatch();
    const onClick = React.useCallback(
        () => {
            if (!isActive) {
                dispatch(playScene(name))
            } else {
                dispatch(pauseActiveScene());
            }
        },
        [isActive, dispatch, name]
    );

    return (
        <Container isActive={isActive} onClick={onClick} {...rest}>
            <Background
                imageURL={imageURL}
                isActive={isActive}
            />
            <NameBar isActive={isActive}>{ name }</NameBar>
        </Container>
    );
}

export const SceneCard = SortableElement(Card);
