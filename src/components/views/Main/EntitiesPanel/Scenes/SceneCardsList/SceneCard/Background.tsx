import styled, { css } from 'styled-components';
import * as React from 'react';

type Props = {
    imageURL: string;
    isActive: boolean;
    isDragging: boolean;
}

export const Background: React.FC<Props> = styled.div<Props>(({
    isActive,
    imageURL,
    isDragging,
}) => css`
    z-index: 0;
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    transition: 300ms ease opacity;
    background: url(${imageURL}), center center;
    background-size: cover;
    opacity: ${isActive ? 1 : 0.2};

    :hover {
        ${!isActive && !isDragging && 'opacity: 0.5'};
    }
`);
