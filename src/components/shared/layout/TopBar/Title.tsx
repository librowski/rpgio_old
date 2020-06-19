import * as React from 'react';
import styled from 'styled-components';
import { Text } from '../../typography/Text';
import { useSelector } from 'react-redux';
import { appInfoSelector } from '@store/app/selectors';

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
    margin-left: 8px;
    opacity: 0.5;
    display: inline;
`;

export const versionTestId = 'versionTestId';

/*
    A work-around used due to wrong styled-components typings
    https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30117
 */
const asPropObject: Partial<React.ComponentProps<typeof Version>> = {
    as: 'span',
};

export const Title: React.FC = () => {
    const { name, version } = useSelector(appInfoSelector);
    return (
        <Container>
            <AppName color={'accent'} weight={'medium'} size={'lg'}>
                { name }
                <Version
                    {...asPropObject}
                    size={'sm'}
                    data-test-id={versionTestId}
                >
                    v{ version }
                </Version>
            </AppName>
        </Container>
    );
};
