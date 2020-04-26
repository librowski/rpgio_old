import * as React from 'react';
import { Container } from './Container';
import { Scene } from '../../../../../../../store/scenes/types';
import { NameBar } from './NameBar';
import { playScene } from '../../../../../../../store/scenes/scenes';
import { useDispatch } from 'react-redux';
import { Background } from './Background';

type Props =
    & React.ComponentProps<typeof Background>
    & Scene;

export const SceneCard: React.FC<Props> = ({
    name,
    isActive,
    imageURL,
    ...rest
}) => {
    const dispatch = useDispatch();
    const onClick = React.useCallback(
        () => dispatch(playScene(name)),
        [name, dispatch]
    );

    return (
        <Container onClick={onClick} {...rest}>
            <Background imageURL={imageURL} isActive={isActive} />
            <NameBar isActive={isActive}>{ name }</NameBar>
        </Container>
    );
}
