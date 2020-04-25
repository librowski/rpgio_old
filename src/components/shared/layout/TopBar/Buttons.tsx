import * as React from 'react';
import styled from 'styled-components';
import { IconButton } from '../../buttons/IconButton/IconButton';
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

export const minimizeButtonTestId = 'minimizeButtonTestId';
export const maximizeButtonTestId = 'maximizeButtonTestId';
export const quitButtonTestId = 'quitButtonTestId';

export const Buttons: React.FC = () => {
    const dispatch = useDispatch();

    const onClose = () => dispatch(quit());
    const onMinimize = () => dispatch(minimize());
    const onMaximize = () => dispatch(maximize());

    return (
        <Container>
            <IconButton
                data-test-id={minimizeButtonTestId}
                icon={Minus}
                onClick={onMinimize} />
            <IconButton
                data-test-id={maximizeButtonTestId}
                icon={Maximize}
                onClick={onMaximize} />
            <IconButton
                data-test-id={quitButtonTestId}
                icon={X}
                onClick={onClose} />
        </Container>
    );
}
