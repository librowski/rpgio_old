import { SceneCardList } from './SceneCardList';
import React from 'react';
import { mount, toMock } from '../../../../../../test/enzyme';
import { Scene } from '../../../../../../store/scenes/types';
import {
    activeSceneNameSelector,
    scenesSelector
} from '../../../../../../store/scenes/selectors';
import { uiDataSelector } from '../../../../../../store/userData/selectors';
import { UserDataState } from '../../../../../../store/userData/types';
import { SceneCard } from './SceneCard/SceneCard';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: (fn: Function) => fn(),
    useDispatch: () => jest.fn(),
}));

jest.mock('../../../../../../store/scenes/selectors', () => ({
    activeSceneNameSelector: jest.fn(),
    scenesSelector: jest.fn(),
}));

jest.mock('../../../../../../store/userData/selectors', () => ({
    uiDataSelector: jest.fn(),
}));

describe('[UNIT] <SceneCardList />', () => {
    it('should render <SceneCard /> using scenes data from store', () => {
        const fakeScenes: Scene[] = [
            { name: 'Horror', imageURL: '' },
            { name: 'Boodieboo', imageURL: '' },
            { name: 'Howdie bowdie', imageURL: '' },
        ];

        toMock(scenesSelector).mockReturnValueOnce(fakeScenes);
        toMock(activeSceneNameSelector).mockReturnValueOnce('Horror');
        toMock(uiDataSelector).mockReturnValue({
            isDragging: false,
            isResizing: false,
        } as UserDataState['ui']);

        const wrapper = mount(
            <SceneCardList />
        );

        const scenes = wrapper.find(SceneCard);
        const scene1 = scenes.at(0);
        const scene2 = scenes.at(1);
        const scene3 = scenes.at(2);

        expect(scene1).toHaveProp('name', 'Horror');
        expect(scene2).toHaveProp('name', 'Boodieboo');
        expect(scene3).toHaveProp('name', 'Howdie bowdie');
    });
});
