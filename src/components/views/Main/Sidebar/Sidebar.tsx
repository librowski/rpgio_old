import * as React from 'react';
import { useSelector } from 'react-redux';
import { uiDataSelector } from '../../../../store/userData/selectors';
import { Container } from './Container';
import { ResizeHandle } from './ResizeHandle';

export const Sidebar: React.FC = () => {
    const { sidebarWidth } = useSelector(uiDataSelector);

    return (
        <Container width={sidebarWidth}>
            <ResizeHandle />
        </Container>
    );
}
