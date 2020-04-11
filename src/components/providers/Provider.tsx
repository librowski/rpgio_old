import * as React from 'react';
import { StoreProvider } from './StoreProvider';
import { RouterProvider } from './RouterProvider';

export const Provider: React.FC = ({ children }) => (
    <StoreProvider>
        <RouterProvider>
            {children}
        </RouterProvider>
    </StoreProvider>
);
