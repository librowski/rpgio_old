import * as React from 'react';
import styled from 'styled-components';
import { Text } from '../../typography/Text';
import { app } from '../../../../electron/electron';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Version = styled(Text)`
    margin-left: 8px;
`;

export const Title: React.FC = () => (
    <Container>
        <Text color={'accent'} weight={'medium'} size={'lg'}>
            Maestro
        </Text>
        <Version size={'sm'}>
            v{app.getVersion()}
        </Version>
    </Container>
);
