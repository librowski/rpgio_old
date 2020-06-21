import * as React from 'react';
import { mount } from '../../../../../test/enzyme';
import { SortableCollection } from './SortableButton/SortableButton';
import * as _ from 'lodash/fp';
import { SortableButtonList } from './SortableButtonList';

describe('<SortableButtonList />', () => {
    it('should render items provided in collection', () => {
        const collection: SortableCollection = [
            {
                name: 'Battle ambient',
                onClick: _.noop,
            },
            {
                name: 'Fade in',
                onClick: _.noop,
            },
            {
                name: 'Radio effect',
                onClick: _.noop,
            },
        ];

        const wrapper = mount(
            <SortableButtonList collection={collection} />
        );

        expect(wrapper.contains('Battle ambient'))
            .toBe(true);
        expect(wrapper.contains('Fade in'))
            .toBe(true);
        expect(wrapper.contains('Radio effect'))
            .toBe(true);
    });
});
