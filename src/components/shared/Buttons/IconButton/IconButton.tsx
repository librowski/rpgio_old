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
    size = 14,
    onClick = _.noop,
    ...rest
}) => (
    <Container color={color} size={size} onClick={onClick} {...rest}>
        <Icon size={size} />
    </Container>
);
