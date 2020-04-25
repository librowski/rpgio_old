import * as React from 'react';
import styled from 'styled-components';
import { useResize } from './useResize';

const VerticalHandle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 5px;
    transform: translateX(-50%);
    cursor: ew-resize;
`;

export const ResizeHandle: React.FC = () => {
    const { onMouseDown } = useResize();

    return (
        <VerticalHandle
            onMouseDown={onMouseDown}
        />
    );
}
