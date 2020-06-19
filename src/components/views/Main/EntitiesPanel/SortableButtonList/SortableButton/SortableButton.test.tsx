import { SortableButton } from './SortableButton';
import React from 'react';
import { mount, toMock } from '@test/enzyme';
import * as _ from 'lodash/fp';
import { uiDataSelector } from '@store/userData/selectors';
import { UIState } from '@store/userData/types';

jest.mock('react-sortable-hoc', () => ({
    SortableElement: (component: React.FC) => component,
}));

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: (fn: Function) => fn(),
    useDispatch: () => jest.fn(),
}));

jest.mock('../../../../../../store/userData/selectors', () => ({
    uiDataSelector: jest.fn(),
}));

describe('<SortableButton />', () => {
    it('should render provided name prop', () => {
        toMock(uiDataSelector).mockReturnValue({} as unknown as UIState);

        const wrapper = mount(
            <SortableButton
                onClick={_.noop}
                index={1}
                name={'Gun shot'}
            />
        );

        expect(wrapper)
            .toHaveText('Gun shot');
    });
});
