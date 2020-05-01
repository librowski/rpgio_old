import * as React from 'react';
import { Text } from './Text';
import { mount } from '../../../test/enzyme';
import { theme } from '../styles/theme';

describe('<Text />', () => {
    it('should pass appropriate styles', () => {
        const props: React.ComponentProps<typeof Text> = {
            color: 'background',
            size: 'xs',
            weight: 'medium'
        };

        const wrapper = mount(
            <Text {...props} />
        );

        expect(wrapper).
            toHaveStyleRule('color', theme.colors['background']);
        expect(wrapper).
            toHaveStyleRule('font-size', theme.textSizes['xs'] + 'px');
        expect(wrapper).
            toHaveStyleRule('font-weight', '500');
    });
});
