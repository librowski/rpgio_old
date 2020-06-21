import { SoundModel } from '@store/sounds/types';
import { muteSound, playSound, sounds } from '@player/player';

jest.mock('@player/audio/Sound');

describe('playSound()', () => {
    it('should create a Sound instance and call play() method', () => {
        const soundModel: SoundModel = {
            files: [],
            name: 'Sound',
        };

        playSound(soundModel);

        expect(sounds['Sound'])
            .not.toBeUndefined();

        expect(sounds['Sound'].play)
            .toHaveBeenCalled();
    });
});

describe('muteSound()', () => {
    it('should call mute() method if sound was played', () => {
        const soundModel: SoundModel = {
            files: [],
            name: 'Sound',
        };

        playSound(soundModel);
        muteSound(soundModel);

        expect(sounds['Sound'].mute)
            .toHaveBeenCalled();
    });
});
