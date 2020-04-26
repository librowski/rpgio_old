import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserDataState } from './types';

const initialState: UserDataState = {
    ui: {
        sidebarWidth: 300,
    }
};

const userData = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        setSidebarWidth: (state, action: PayloadAction<number>) => {
            state.ui.sidebarWidth = action.payload;
        }
    }
});

const { actions, reducer } = userData;
const {
    setSidebarWidth
} = actions;

export {
    reducer as userDataReducer,
    setSidebarWidth
};
