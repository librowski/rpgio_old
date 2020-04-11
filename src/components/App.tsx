import * as React from 'react';
import { Provider } from './providers/Provider';
import { Main } from './views/Main/Main';
import { Route, Switch } from 'react-router-dom';
import { SETTINGS_PATH } from './views/navigation';

export const App: React.FC = () => (
    <Provider>
        <Switch>
            <Route path={SETTINGS_PATH} />
            <Route component={Main} />
        </Switch>
    </Provider>
);
