import { createAsyncThunk } from '@reduxjs/toolkit';
import { app, appWindow } from '../../electron/electron';

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
