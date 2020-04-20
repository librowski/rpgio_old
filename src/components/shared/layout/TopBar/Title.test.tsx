import { app as appMock } from '../../../../electron/electron';
import React from 'react';
import { Title } from './Title';
import { mount } from '../../../../test/enzyme';

jest.mock('../../../../electron/electron', () => ({
    app: {
        getVersion: jest.fn(),
    }
}));

describe('[UNIT] <Title />', () => {
    it('should contain app version information', async () => {
        appMock.getVersion.mockReturnValueOnce('1.37');

        const wrapper = mount(
            <Title />
        );

        expect(wrapper.text()).toContain('1.37');
    });
});
