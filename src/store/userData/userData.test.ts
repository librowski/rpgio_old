import { UserDataState } from './types';
import {
    setDragging,
    setResizing,
    setSidebarWidth,
    userDataReducer
} from './userData';

describe('[UNIT] userDataReducer()', () => {
    it('should set sidebar width', () => {
        const initialState: UserDataState = {
            ui: {
                isResizing: false,
                isDragging: false,
                sidebarWidth: 500,
            }
        };

        const newState = userDataReducer(initialState, setSidebarWidth(2137));

        const expected: UserDataState = {
            ui: {
                isDragging: false,
                isResizing: false,
                sidebarWidth: 2137,
            }
        };

        expect(newState).toEqual(expected);
    });

    it('should set dragging state', () => {
        const initialState: UserDataState = {
            ui: {
                isResizing: false,
                isDragging: false,
                sidebarWidth: 500,
            }
        };

        const newState = userDataReducer(initialState, setDragging(true));

        const expected: UserDataState = {
            ui: {
                isDragging: true,
                isResizing: false,
                sidebarWidth: 500,
            }
        };

        expect(newState).toEqual(expected);
    });


    it('should set resizing state', () => {
        const initialState: UserDataState = {
            ui: {
                isResizing: false,
                isDragging: false,
                sidebarWidth: 500,
            }
        };

        const newState = userDataReducer(initialState, setResizing(true));

        const expected: UserDataState = {
            ui: {
                isDragging: false,
                isResizing: true,
                sidebarWidth: 500,
            }
        };

        expect(newState).toEqual(expected);
    });
});
