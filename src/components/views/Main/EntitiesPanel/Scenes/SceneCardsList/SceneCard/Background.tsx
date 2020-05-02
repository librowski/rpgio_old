import styled, { css } from 'styled-components';

type Props = {
    imageURL: string;
    isActive: boolean;
}

export const Background = styled.div<Props>(({
    isActive,
    imageURL,
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
`);
