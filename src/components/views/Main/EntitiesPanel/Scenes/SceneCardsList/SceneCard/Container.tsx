import styled, { css } from 'styled-components';
import * as _ from 'lodash/fp';
import { getSize } from '../../../../../../shared/styles/theme';
import * as React from 'react';

export const MAX_WIDTH = 260;

export const getCountInRow = (scenesContainerWidth: number) =>
    _.floor(scenesContainerWidth / MAX_WIDTH);

export const getWidth = (
    scenesContainerWidth: number,
    spacing: number
) => {
    const countInRow = getCountInRow(scenesContainerWidth);

    return scenesContainerWidth / countInRow - (countInRow - 1) * spacing;
}

type Props = {
    imageURL: string;
    isActive: boolean;
};

export const Container: React.FC<Props> = styled.div<Props>(({
    imageURL,
}) => css`
    will-change: width;
    height: ${getSize('sceneCardHeight')}px;
    border-radius: 4px;
    background: url(${imageURL});
    display: flex;
    justify-content: stretch;
    align-items: flex-end;
    cursor: pointer;
`);
