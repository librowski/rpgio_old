import { addTest, soundsReducer } from './sounds';
import { SoundsState } from './types';

describe('soundsReducer()', () => {
    it('should add "test" on addTest()', () => {
        const initialState: SoundsState = {
            sounds: [],
        };

        const action = {
            type: addTest.type,
        };

        const expected = {
            sounds: ['test'],
        };

        expect(soundsReducer(initialState, action))
            .toEqual(expected);
    });
});
