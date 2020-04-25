import styled, { css } from 'styled-components';

type Props = {
    width: number;
    sceneCardWidth: number;
}

export const Container = styled.div<Props>(({
    width,
    sceneCardWidth,
}) => css`
    will-change: width;
    width: ${width}px;
    height: 240px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    > div {
        will-change: width;
        width: ${sceneCardWidth}px;
    }
`);
