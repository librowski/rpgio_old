import styled, { css } from 'styled-components';
import { Color, getColor } from '../../styles/theme';
import * as React from 'react';

type Props = {
    size: number;
    color: Color;
    onClick: React.MouseEventHandler;
}

export const Container: React.FC<Props> = styled.div<Props>(({
    size,
    color,
}) => css`
    height: ${1.5 * size}px;
    width: ${1.5 * size}px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background: rgba(255, 255, 255, 0.02);
    cursor: pointer;
    transition: 300ms ease background;

    > svg {
        stroke: ${getColor(color)};
        transition: 100ms ease filter, 100ms ease stroke;
    }

    :hover {
        background: rgba(255, 255, 255, 0.05);

        > svg {
            filter: brightness(1.15);
            stroke: ${getColor('accent')};
        }
    }
`);
