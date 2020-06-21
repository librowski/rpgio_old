import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SoundsState } from './types';
import { ReorderData } from '../types';
import { reorder } from '../utils';
import { sounds } from '@test/sample/store/sounds';

const initialState: SoundsState = {
    sounds,
};

const soundsSlice = createSlice({
    name: 'sounds',
    initialState,
    reducers: {
        addSound: state => state,
        removeSound: state => state,
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
    reorderSound,
} = actions;

export {
    reducer as soundsReducer,
    addSound,
    removeSound,
    reorderSound,
};
