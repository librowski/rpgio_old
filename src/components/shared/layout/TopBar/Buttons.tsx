import * as React from 'react';
import styled from 'styled-components';
import { app, appWindow } from '../../../../electron/electron';
import { IconButton } from '../../Buttons/IconButton';
import { Settings, Maximize, X } from 'react-feather';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
        margin: 0 8px;
    }

    > div :last-of-type {
        margin-right: 0;
    }
`

export const Buttons: React.FC = () => {
    const onClose = () => app.quit();
    const onMaximize = () => appWindow.maximize();

    return (
        <Container>
            <IconButton icon={Settings} color={'accent'} />
            <IconButton icon={Maximize} onClick={onMaximize} />
            <IconButton icon={X} onClick={onClose} />
        </Container>
    );
}
