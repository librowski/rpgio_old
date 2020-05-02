import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SoundsState } from './types';
import { ReorderData } from '../types';
import { reorder } from '../utils';
import { sounds } from '../__fake__/sounds';

const initialState: SoundsState = {
    sounds,
};

const soundsSlice = createSlice({
    name: 'sounds',
    initialState,
    reducers: {
        addSound: state => state,
        removeSound: state => state,
        pauseSound: state => state,
        playSound: (state, {}: PayloadAction<string>) => state,
        reorderSound: (state, action: PayloadAction<ReorderData>) => {
            const { oldIndex, newIndex } = action.payload;

            state.sounds = reorder(state.sounds, oldIndex, newIndex);
        },
    }
});

const { actions, reducer } = soundsSlice;
const {
    addSound,
    removeSound,
    pauseSound,
    playSound,
    reorderSound,
} = actions;

export {
    reducer as soundsReducer,
    addSound,
    removeSound,
    pauseSound,
    playSound,
    reorderSound,
};
