import * as React from 'react';
import { StoreProvider } from './StoreProvider';
import { RouterProvider } from './RouterProvider';
import { I18nProvider } from './I18nProvider';

export const Provider: React.FC = ({ children }) => (
    <StoreProvider>
        <I18nProvider>
            <RouterProvider>
                { children }
            </RouterProvider>
        </I18nProvider>
    </StoreProvider>
);
