import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScenesState } from './types';
import { scenesState } from '../__fake__/scenes';
import { ReorderData } from '../types';
import { reorder } from '../utils';

const initialState: ScenesState = scenesState;

const scenesSlice = createSlice({
    name: 'scenes',
    initialState,
    reducers: {
        addScene: state => state,
        removeScene: state => state,
        reorderScene: (state, action: PayloadAction<ReorderData>) => {
            const { oldIndex, newIndex } = action.payload;

            state.scenes = reorder(state.scenes, oldIndex, newIndex);
        },
        playScene: (state, action: PayloadAction<string>) => {
            state.activeSceneName = action.payload;
        },
        pauseActiveScene: (state) => {
            state.activeSceneName = null;
        },
    }
});

const { actions, reducer } = scenesSlice;
const {
    addScene,
    removeScene,
    reorderScene,
    playScene,
    pauseActiveScene,
} = actions;

export {
    reducer as scenesReducer,
    addScene,
    removeScene,
    reorderScene,
    playScene,
    pauseActiveScene,
};
