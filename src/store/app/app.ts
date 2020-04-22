import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { app, appWindow } from '../../electron/electron';
import { AppState } from './types';

const initialState: AppState = {
    name: 'rpgio',
    version: app.getVersion()
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {}
});

const { reducer } = appSlice;
export { reducer as appReducer };

export const quit = createAsyncThunk(
    'app/quit',
    () => app.quit(),
);

export const maximize = createAsyncThunk(
    'app/maximize',
    () => appWindow.maximize(),
);

export const minimize = createAsyncThunk(
    'app/minimize',
    () => appWindow.minimize(),
);

