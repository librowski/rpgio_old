import { Background } from './Background';
import React from 'react';
import { mount } from '../../../../../../../test/enzyme';

describe('[UNIT] <Background />', () => {
    it('should have 20% opacity if the card isn\'t active', () => {
        const wrapper = mount(
            <Background imageURL={''} isDragging={false} isActive={false} />
        );

        expect(wrapper).toHaveStyleRule('opacity', '0.2');
    });

    it('should have 100% opacity if the card is active' +
        'and is hovered over', () => {
        const wrapper = mount(
            <Background imageURL={''} isDragging={false} isActive={true} />
        );

        expect(wrapper).toHaveStyleRule('opacity', '1');
    });
});
