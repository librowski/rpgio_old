import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { soundsReducer } from './sounds/sounds';
import { appReducer } from './app/app';

const rootReducer = combineReducers({
    sounds: soundsReducer,
    app: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});
