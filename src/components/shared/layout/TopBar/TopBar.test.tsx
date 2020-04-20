import * as React from 'react';
import { mount } from '../../../../test/enzyme';
import { TopBar } from './TopBar';
import { Title } from './Title';

jest.mock('../../../../electron/electron', () => ({
    app: {
        getVersion: jest.fn(),
    }
}));

describe('[UNIT] <TopBar />', () => {
    it('should contain a <Title /> component', () => {
        const wrapper = mount(
            <TopBar />
        );

        const title = wrapper.find(Title);

        expect(title).toExist();
    });
});


