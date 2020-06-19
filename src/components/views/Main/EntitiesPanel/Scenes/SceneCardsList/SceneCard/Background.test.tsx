import { Background } from './Background';
import React from 'react';
import { mount } from '@test/enzyme';

describe('<Background />', () => {
    it('should have 20% opacity if the card isn\'t active', () => {
        const wrapper = mount(
            <Background imageURL={''} isActive={false} />
        );

        expect(wrapper).toHaveStyleRule('opacity', '0.2');
    });

    it('should have 100% opacity if the card is active' +
        'and is hovered over', () => {
        const wrapper = mount(
            <Background imageURL={''} isActive={true} />
        );

        expect(wrapper).toHaveStyleRule('opacity', '1');
    });
});
