import styled from 'styled-components';
import { getColor, getSize } from '../../../../../../shared/styles/theme';
import * as React from 'react';
import { Text } from '../../../../../../shared/typography/Text';

const Container = styled.div`
    transition: 300ms ease background;
    width: 100%;
    height: ${getSize('sceneNameBarHeight')}px;
    padding-left: 8px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: ${getColor('foregroundDark')};
    z-index: 1;
`;

export const Name = styled(Text)`
    transition: 300ms ease color;
`;

type Props = {
    isActive: boolean;
};

export const NameBar: React.FC<Props> = ({ isActive, children }) => (
    <Container>
        <Name size='lg' color={isActive ? 'textLight' : 'textPrimary'}>
            { children }
        </Name>
    </Container>
);
