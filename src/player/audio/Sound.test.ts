import { sounds } from '@test/sample/store/sounds';
import { Sound } from '@player/audio/Sound';
import { ctx } from '@player/audio/context/context';
import { shuffle } from '@store/utils';

jest.mock('@store/utils', () => ({
    shuffle: jest.fn(() => []),
}));

const sampleSoundModel = sounds[0];

describe('Sound > play()', () => {
    it('should call shuffle() to randomize the file paths', () => {
        const sound = new Sound(sampleSoundModel);

        sound.play();

        expect(shuffle)
            .toHaveBeenCalled();
    });

    it('should call create createMediaElementSource() on audio context', () => {
        const sound = new Sound(sampleSoundModel);

        sound.play();

        expect(ctx.createMediaElementSource)
            .toHaveBeenCalled();
    });
});
