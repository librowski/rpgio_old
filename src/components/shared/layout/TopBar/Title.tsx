import * as React from 'react';
import styled from 'styled-components';
import { Typography } from '../../Typography/Typography';
import { app } from '../../../../electron/electron';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Version = styled(Typography)`
    margin-left: 8px;
`;

export const versionTestId = 'versionTestId';

export const Title: React.FC = () => (
    <Container>
        <Typography color={'accent'} weight={'medium'} size={'lg'}>
            Maestro
        </Typography>
        <Version size={'sm'} data-test-id={versionTestId}>
            v{app.getVersion()}
        </Version>
    </Container>
);
