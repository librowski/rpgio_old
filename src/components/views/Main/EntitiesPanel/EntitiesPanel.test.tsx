import { EntitiesPanel } from './EntitiesPanel';
import React from 'react';
import { mount } from '../../../../test/enzyme';
import { Scenes } from './Scenes/Scenes';

describe('[UNIT] <EntitiesPanel />', () => {
    it('should render <Scenes />', () => {
        const wrapper = mount(
            <EntitiesPanel />
        );

        const scenes = wrapper.find(Scenes);

        expect(scenes).toExist();
    });
});
