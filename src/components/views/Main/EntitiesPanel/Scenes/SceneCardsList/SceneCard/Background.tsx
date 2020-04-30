import styled, { css } from 'styled-components';
import * as React from 'react';

type Props = {
    imageURL: string;
    isActive: boolean;
}

export const Background: React.FC<Props> = styled.div<Props>(({
    isActive,
    imageURL,
}) => css`
    z-index: 0;
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    transition: 300ms ease opacity;
    opacity: ${isActive ? 1 : 0.2};
    background: url(${imageURL}), center center;
    background-size: cover;
`);
