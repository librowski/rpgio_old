import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from '@store/store';

export const StoreProvider: React.FC = ({ children }) => (
    <Provider store={store}>{children}</Provider>
);
