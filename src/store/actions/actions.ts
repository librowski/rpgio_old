import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActionsState } from './types';
import { ReorderData } from '../types';
import { reorder } from '../utils';
import { actions as fakeActions } from '@test/sample/store/actions';

const initialState: ActionsState = {
    actions: fakeActions,
};

const soundsSlice = createSlice({
    name: 'actions',
    initialState,
    reducers: {
        addAction: state => state,
        removeAction: state => state,
        stopAction: state => state,
        performAction: (state, {}: PayloadAction<string>) => state,
        reorderAction: (state, action: PayloadAction<ReorderData>) => {
            const { oldIndex, newIndex } = action.payload;

            state.actions = reorder(state.actions, oldIndex, newIndex);
        },
    }
});

const { actions, reducer } = soundsSlice;
const {
    addAction,
    removeAction,
    stopAction,
    performAction,
    reorderAction,
} = actions;

export {
    reducer as actionsReducer,
    addAction,
    removeAction,
    stopAction,
    performAction,
    reorderAction,
};
