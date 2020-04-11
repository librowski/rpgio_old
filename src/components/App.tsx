import * as React from 'react';
import { Provider } from './providers/Provider';
import { Main } from './views/Main/Main';

export const App: React.FC = () => (
    <Provider>
        <Main />
    </Provider>
);
