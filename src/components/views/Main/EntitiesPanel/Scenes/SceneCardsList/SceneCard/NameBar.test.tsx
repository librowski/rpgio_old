import { Name, NameBar } from './NameBar';
import React from 'react';
import { mount } from '@test/enzyme';

describe('<NameBar />', () => {
    it('should has textLight color if is active', () => {
        const wrapper = mount(
            <NameBar isActive={true} />
        );

        const name = wrapper.find(Name);
        expect(name).toHaveProp('color', 'textLight');
    });

    it('should has textPrimary color if is active', () => {
        const wrapper = mount(
            <NameBar isActive={false} />
        );

        const name = wrapper.find(Name);
        expect(name).toHaveProp('color', 'textPrimary');
    });
});
