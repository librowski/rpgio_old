import * as React from 'react';
import styled from 'styled-components';
import { Typography } from '../../Typography/Typography';
import { useSelector } from 'react-redux';
import { appInfoSelector } from '../../../../store/app/selectors';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const AppName = styled(Typography)`
    cursor: pointer;
    transition: 100ms ease filter;

    :hover {
        filter: brightness(1.15);
    }
`;

export const Version = styled(Typography)`
    margin-left: 8px;
    opacity: 0.5;
`;

export const versionTestId = 'versionTestId';

export const Title: React.FC = () => {
    const { name, version } = useSelector(appInfoSelector);
    return (
        <Container>
            <AppName color={'accent'} weight={'medium'} size={'lg'}>
                { name }
                <Version as={'span'} size={'sm'} data-test-id={versionTestId}>
                    v{ version }
                </Version>
            </AppName>
        </Container>
    );
};
