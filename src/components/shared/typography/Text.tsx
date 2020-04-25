import { Color, getColor, getTextSize, TextSize } from '../styles/theme';
import styled, { css } from 'styled-components';
import * as React from 'react';

type FontWeight = 'regular' | 'medium';
const fontWeightMap: Record<FontWeight, string> = {
    regular: 'normal',
    medium: '500',
};

type Props = {
    size?: TextSize;
    color?: Color;
    weight?: FontWeight;
}

export const Text: React.FC<Props> = styled.p<Props>(({
    size = 'md',
    color = 'primaryText',
    weight = 'regular'
}) => css`
    margin: 0;
    padding: 0;
    color: ${getColor(color)};
    font-size: ${getTextSize(size)}px;
    font-weight: ${fontWeightMap[weight]};
    user-select: none;
`);

