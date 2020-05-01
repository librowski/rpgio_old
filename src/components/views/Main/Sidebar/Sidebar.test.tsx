import { Sidebar } from './Sidebar';
import React from 'react';
import { mount, toMock } from '../../../../test/enzyme';
import { uiDataSelector } from '../../../../store/userData/selectors';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: (fn: Function) => fn(),
    useDispatch: () => jest.fn(),
}));

jest.mock('../../../../store/userData/selectors', () => ({
    uiDataSelector: jest.fn(),
}));

describe('[UNIT] <Sidebar />', () => {
    it('should have width provided from store', () => {
        toMock(uiDataSelector).mockReturnValue({
            isResizing: false,
            isDragging: false,
            sidebarWidth: 2137,
        });

        const wrapper = mount(
            <Sidebar />
        );

        expect(wrapper).toHaveStyleRule('width', '2137px');
    });
});
