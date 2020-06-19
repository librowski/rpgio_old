import * as React from 'react';
import { StoreProvider } from '@components/providers/StoreProvider';
import { I18nProvider } from '@components/providers/I18nProvider';
import { RouterProvider } from '@components/providers/RouterProvider';
import { ThemeProvider } from '@components/providers/ThemeProvider';

export const MockProvider: React.FC = ({ children }) => (
    <StoreProvider>
        <I18nProvider>
            <RouterProvider>
                <ThemeProvider>
                    { children }
                </ThemeProvider>
            </RouterProvider>
        </I18nProvider>
    </StoreProvider>
);
