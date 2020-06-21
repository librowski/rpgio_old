import { createSoundGainNode, ctx } from '@player/audio/context/context';

describe('createSoundGainNode()', () => {
    it('should call createGain() method of audio context', () => {
        createSoundGainNode();

        expect(ctx.createGain)
            .toHaveBeenCalled();
    });
});
