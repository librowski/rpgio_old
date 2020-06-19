import { IconButton } from './IconButton';
import React from 'react';
import { mount } from '../../../../test/enzyme';
import { X } from 'react-feather';

describe('<IconButton />', () => {
    it('should call onClick function from prop when clicked', () => {
        const onClickSpy = jest.fn();

        const wrapper = mount(
            <IconButton icon={X} onClick={onClickSpy} />
        );

        wrapper.simulate('click');

        expect(onClickSpy)
            .toHaveBeenCalled();
    });
});
