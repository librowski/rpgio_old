import * as React from 'react';
import { useSelector } from 'react-redux';
import { sidebarWidthSelector } from '../../../../store/userData/selectors';
import { Container } from './Container';
import { ResizeHandle } from './ResizeHandle';

export const Sidebar: React.FC = () => {
    const sidebarWidth = useSelector(sidebarWidthSelector);

    return (
        <Container width={sidebarWidth}>
            <ResizeHandle />
        </Container>
    );
}
