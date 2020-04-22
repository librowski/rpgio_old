import { createSlice } from '@reduxjs/toolkit';
import { SoundsState } from './types';

const initialState: SoundsState = {
    sounds: [],
};

const soundsSlice = createSlice({
    name: 'sounds',
    initialState,
    reducers: {
        addTest: (state) => {
            state.sounds.push('test');
        },
    },
});

const { actions, reducer } = soundsSlice;
const { addTest } = actions;

export {
    reducer as soundsReducer,
    addTest
};
