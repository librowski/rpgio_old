import styled, { css } from 'styled-components';
import * as React from 'react';

type Props = {
    imageURL: string;
    isActive: boolean;
};

export const Container: React.FC<Props> = styled.div<Props>(({
    imageURL,
}) => css`
    will-change: width;
    height: 100%;
    border-radius: 4px;
    background: url(${imageURL}), center center;
    background-size: cover;
    display: flex;
    justify-content: stretch;
    align-items: flex-end;
    cursor: pointer;
    scroll-snap-align: start;
    scroll-snap-stop: always;
`);
