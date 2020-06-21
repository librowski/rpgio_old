import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserDataState } from './types';

const initialState: UserDataState = {
    ui: {
        sidebarWidth: 300,
        isDragging: false,
        isResizing: false,
    },
    activity: {}
};

const userData = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        setSidebarWidth: (state, action: PayloadAction<number>) => {
            state.ui.sidebarWidth = action.payload;
        },
        setDragging: (state, action: PayloadAction<boolean>) => {
            state.ui.isDragging = action.payload;
        },
        setResizing: (state, action: PayloadAction<boolean>) => {
            state.ui.isResizing = action.payload;
        },
        setLastAudioPath: (state, action: PayloadAction<string>) => {
            state.activity.lastAudioPath = action.payload;
        },
        setLastImagesPath: (state, action: PayloadAction<string>) => {
            state.activity.lastImagesPath = action.payload;
        }
    }
});

const { actions, reducer } = userData;
const {
    setSidebarWidth,
    setDragging,
    setResizing,
    setLastAudioPath,
    setLastImagesPath,
} = actions;

export {
    reducer as userDataReducer,
    setSidebarWidth,
    setDragging,
    setResizing,
    setLastAudioPath,
    setLastImagesPath,
};
