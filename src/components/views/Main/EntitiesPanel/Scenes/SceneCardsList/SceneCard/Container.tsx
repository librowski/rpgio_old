import styled, { css } from 'styled-components';
import { Background } from './Background';

type Props = {
    isActive: boolean;
    isDragging: boolean;
}

export const Container = styled.div<Props>(({
    isActive,
    isDragging,
}) => css`
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    display: flex;
    justify-content: stretch;
    align-items: flex-end;
    cursor: pointer;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
    min-height: 80px;

    @media(min-height: 800px) {
        min-height: 100px;
    }

    @media(min-height: 1000px) {
        min-height: 120px;
    }

    :hover ${Background} {
        ${!isActive && !isDragging && 'opacity: 0.5'};
    }
`);
