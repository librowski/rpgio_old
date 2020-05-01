import { Header } from './Header';
import React from 'react';
import { mount } from '../../../test/enzyme';

describe('[UNIT] <Header />', () => {
    it('should render text', () => {
        const text = 'Scenes'
        const wrapper = mount(
            <Header>{ text }</Header>
        );

        expect(wrapper).toHaveText(text);
    });
});
