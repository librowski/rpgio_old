import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScenesState } from './types';
import { scenesState } from '../__fake__/scenes';

const initialState: ScenesState = scenesState;

const scenesSlice = createSlice({
    name: 'scenes',
    initialState,
    reducers: {
        addScene: state => state,
        removeScene: state => state,
        reorderScene: state => state,
        playScene: (state, action: PayloadAction<string>) => {
            state.activeSceneName = action.payload;
        }
    }
});

const { actions, reducer } = scenesSlice;
const {
    addScene,
    removeScene,
    reorderScene,
    playScene,
} = actions;

export {
    reducer as scenesReducer,
    addScene,
    removeScene,
    reorderScene,
    playScene,
};
