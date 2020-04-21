import styled, { css } from 'styled-components';
import { Color, getColor } from '../styles/theme';
import * as React from 'react';

type Props = {
    size: number;
    color: Color;
}

export const Container: React.FC<Props> = styled.div<Props>(({
    size,
    color,
}) => css`
    padding: ${0.25 * size}px;
    border-radius: 100%;
    background: rgba(255, 255, 255, 0.15);
    cursor: pointer;
    transition: 300ms ease background;

    > svg {
        fill: ${getColor(color)};
        transition: 300ms ease filter;
    }

    :hover {
        background: rgba(255, 255, 255, 0.35);

        > svg {
            filter: brightness(1.15);
        }
    }
`);
