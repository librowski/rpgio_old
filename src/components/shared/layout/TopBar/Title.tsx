import * as React from 'react';
import styled from 'styled-components';
import { Text } from '../../typography/Text';
import { useSelector } from 'react-redux';
import { appInfoSelector } from '../../../../store/app/selectors';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const AppName = styled(Text)`
    cursor: pointer;
    transition: 100ms ease filter;

    :hover {
        filter: brightness(1.15);
    }
`;

export const Version = styled(Text)`
    will-change: all;
    margin-left: 8px;
    opacity: 0.5;
    display: inline;
`;

export const versionTestId = 'versionTestId';

export const Title: React.FC = () => {
    const { name, version } = useSelector(appInfoSelector);
    return (
        <Container>
            <AppName color={'accent'} weight={'medium'} size={'lg'}>
                { name }
                <Version size={'sm'} data-test-id={versionTestId}>
                    v{ version }
                </Version>
            </AppName>
        </Container>
    );
};
