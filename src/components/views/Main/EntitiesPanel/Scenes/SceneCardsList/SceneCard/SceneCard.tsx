import * as React from 'react';
import { Container } from './Container';
import { Scene } from '../../../../../../../store/scenes/types';
import { Text } from '../../../../../../shared/typography/Text';
import { NameBar } from './NameBar';

type Props =
    & React.ComponentProps<typeof Container>
    & Scene;

export const SceneCard: React.FC<Props> = ({
    name,
    ...rest
}) => (
    <Container isActive={false} {...rest}>
        <NameBar>
            <Text>{ name }</Text>
        </NameBar>
    </Container>
);
