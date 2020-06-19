import { Scenes } from './Scenes';
import React from 'react';
import { mount } from '@test/enzyme';
import { SceneCardList } from './SceneCardsList/SceneCardList';

describe('<Scenes />', () => {
    it('should render <SceneCardList />', () => {
        const wrapper = mount(
            <Scenes />
        );

        const scenesCardList = wrapper.find(SceneCardList);

        expect(scenesCardList).toExist();
    });
});
