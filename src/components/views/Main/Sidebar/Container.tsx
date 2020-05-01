import styled, { css } from 'styled-components';
import { getColor } from '../../../shared/styles/theme';

type Props = {
    width: number;
}

export const Container = styled.div<Props>(({
    width
}) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    will-change: width;
    width: ${width}px;
    height: 100%;
    background: ${getColor('foregroundLight')};
`);
