import styled, { css } from 'styled-components';
import { getColor } from '../../../../../shared/styles/theme';
import { Background } from './Background';

type Props = {
    isDragging: boolean;
};

export const Container = styled.div<Props>(({
    isDragging
}) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 36px;
    padding: 8px 24px;
    margin-right: 8px;
    margin-bottom: 8px;
    border-radius: 4px;
    cursor: pointer;

    :hover ${Background} {
        ${!isDragging && css`background: ${getColor('foregroundLight')}`};
    }
`);
