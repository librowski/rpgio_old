import { Scene, ScenesState } from './types';
import {
    pauseActiveScene,
    playScene,
    reorderScene,
    scenesReducer
} from './scenes';

describe('[UNIT] scenesReducer()', () => {
    it('should set active scene', () => {
        const state: ScenesState = {
            scenes: [],
        };

        const newState = scenesReducer(state, playScene('Forest'));

        const expectedState: ScenesState = {
            scenes: [],
            activeSceneName: 'Forest',
        };

        expect(newState).toEqual(expectedState);
    });

    it('should pause active scene', () => {
        const state: ScenesState = {
            scenes: [],
            activeSceneName: 'Forest',
        };

        const newState = scenesReducer(state, pauseActiveScene());

        const expectedState: ScenesState = {
            scenes: [],
            activeSceneName: null,
        };

        expect(newState).toEqual(expectedState);
    });

    it('should reorder scenes', () => {
        const scene1: Scene = { name: 'Forest', imageURL: '' };
        const scene2: Scene = { name: 'City', imageURL: '' };
        const scene3: Scene = { name: 'Orcs Tower', imageURL: '' };

        const state: ScenesState = {
            scenes: [scene1, scene2, scene3],
        };

        const newState = scenesReducer(
            state,
            reorderScene({ oldIndex: 2, newIndex: 0 })
        );

        const expectedState: ScenesState = {
            scenes: [scene3, scene1, scene2],
        };

        expect(newState).toEqual(expectedState);
    });
});
