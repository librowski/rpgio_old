import { ResizeHandle } from './ResizeHandle';
import React from 'react';
import { mount, toMock } from '../../../../test/enzyme';
import { uiDataSelector } from '../../../../store/userData/selectors';
import {
    setResizing,
    setSidebarWidth
} from '../../../../store/userData/userData';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: (fn: Function) => fn(),
    useDispatch: () => jest.fn(),
}));

jest.mock('../../../../store/userData/userData', () => ({
    ...jest.requireActual('../../../../store/userData/userData'),
    setResizing: jest.fn(),
    setSidebarWidth: jest.fn(),
}));

jest.mock('../../../../store/userData/selectors', () => ({
    uiDataSelector: jest.fn(),
}));

jest.mock('lodash', () => ({
    ...jest.requireActual('lodash'),
    inRange: () => true,
}));

describe('[UNIT] <ResizeHandle />', () => {
    it('should start resizing on mouse down', () => {
        toMock(uiDataSelector).mockReturnValue({
            sidebarWidth: 100,
            isDragging: false,
            isResizing: false,
        });

        const wrapper = mount(
            <ResizeHandle />
        );

        wrapper.simulate('mousedown');

        expect(setResizing).toHaveBeenCalledWith(true);
    });

    it('should stop resizing on mouse up', () => {
        toMock(uiDataSelector).mockReturnValue({
            sidebarWidth: 100,
            isDragging: false,
            isResizing: false,
        });

        const wrapper = mount(
            <ResizeHandle />
        );

        wrapper.simulate('mousedown');
        document.dispatchEvent(new MouseEvent('mouseup'));

        expect(setResizing).toHaveBeenLastCalledWith(false);
    });


    it('should resize on mouse move', () => {
        toMock(uiDataSelector).mockReturnValue({
            sidebarWidth: 100,
            isDragging: false,
            isResizing: false,
        });

        const wrapper = mount(
            <ResizeHandle />
        );

        wrapper.simulate('mousedown');
        document.dispatchEvent(new MouseEvent('mousemove'));
        expect(setSidebarWidth).toHaveBeenCalled();
    });
});
