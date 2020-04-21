import * as React from 'react';
import { Icon } from 'react-feather';
import * as _ from 'lodash/fp';
import { Container } from './Container';

type Props =
    & Partial<React.ComponentProps<typeof Container>>
    & {
        icon: Icon;
        onClick?: React.MouseEventHandler;
    };

export const IconButton: React.FC<Props> = ({
    icon: Icon,
    color = 'primaryText',
    size = 18,
    onClick = _.noop,
}) => (
    <Container color={color} size={size}>
        <Icon size={size} onClick={onClick} />
    </Container>
);
