import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { soundsReducer } from './sounds/reducer';

const rootReducer = combineReducers({
    sounds: soundsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});
