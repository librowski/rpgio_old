import React from 'react';
import { Title } from './Title';
import { mount, toMock } from '@test/enzyme';
import { appInfoSelector } from '@store/app/selectors';

jest.mock('@store/app/selectors', () => ({
    appInfoSelector: jest.fn(),
}));

jest.mock('@electron/electron');

describe('<Title />', () => {
    it('should contain app title and version information', async () => {
        toMock(appInfoSelector).mockReturnValue({
            name: 'rpgio',
            version: '1.37',
        });

        const wrapper = mount(
            <Title />
        );

        const text = wrapper.text();

        expect(text).toContain('1.37');
        expect(text).toContain('rpgio');
    });
});
