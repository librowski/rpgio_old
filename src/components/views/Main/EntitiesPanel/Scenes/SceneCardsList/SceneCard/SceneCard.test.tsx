import { SceneCard } from './SceneCard';
import React from 'react';
import { mount } from '../../../../../../../test/enzyme';
import {
    pauseActiveScene,
    playScene
} from '../../../../../../../store/scenes/scenes';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: () => ({}),
    useDispatch: () => jest.fn(),
}));

jest.mock('react-sortable-hoc', () => ({
    // eslint-disable-next-line react/display-name
    SortableElement: (component: unknown) => component,
}));

jest.mock('../../../../../../../store/scenes/scenes', () => ({
    ...jest.requireActual('../../../../../../../store/scenes/scenes'),
    pauseActiveScene: jest.fn(),
    playScene: jest.fn(),
}));

describe('[UNIT] <SceneCard />', () => {
    const sceneCardProps: React.ComponentProps<typeof SceneCard> = {
        name: 'Scene',
        isDragging: false,
        isActive: false,
        imageURL: '',
        index: 1,
    };

    it('should play scene on click if is not active', () => {
        const wrapper = mount(
            <SceneCard {...sceneCardProps} isActive={false} />,
        );

        wrapper.simulate('click');

        expect(playScene).toHaveBeenCalled();
    });

    it('should pause active scene on click if is active', () => {
        const wrapper = mount(
            <SceneCard {...sceneCardProps} isActive={true} />,
        );

        wrapper.simulate('click');

        expect(pauseActiveScene).toHaveBeenCalled();
    });
});
