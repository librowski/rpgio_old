import * as React from 'react';
import styled from 'styled-components';
import { IconButton } from '../../Buttons/IconButton';
import { Maximize, Minus, X } from 'react-feather';
import { useDispatch } from 'react-redux';
import { maximize, minimize, quit } from '../../../../store/app/app';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
        margin: 0 4px;
    }

    > div :last-of-type {
        margin-right: 0;
    }
`

export const Buttons: React.FC = () => {
    const dispatch = useDispatch();

    const onClose = () => dispatch(quit());
    const onMinimize = () => dispatch(minimize());
    const onMaximize = () => dispatch(maximize());

    return (
        <Container>
            <IconButton icon={Minus} onClick={onMinimize} />
            <IconButton icon={Maximize} onClick={onMaximize} />
            <IconButton icon={X} onClick={onClose} />
        </Container>
    );
}
