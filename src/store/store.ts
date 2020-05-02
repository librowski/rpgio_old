import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { appReducer } from './app/app';
import { soundsReducer } from './sounds/sounds';
import { scenesReducer } from './scenes/scenes';
import { userDataReducer } from './userData/userData';
import { actionsReducer } from './actions/actions';

const rootReducer = combineReducers({
    sounds: soundsReducer,
    actions: actionsReducer,
    scenes: scenesReducer,
    app: appReducer,
    userData: userDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});
