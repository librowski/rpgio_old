import { SoundModel } from '@store/sounds/types';
import { getFilePath } from '../files/utils';
import * as _ from 'lodash/fp';
import { createSoundGainNode, ctx } from './context/context';
import { shuffle } from '@store/utils';

export class Sound {
    private filePaths: string[];
    private gainNode: GainNode;

    constructor(sound: SoundModel) {
        this.filePaths = _.flowRight(
            _.map(({ path }) => getFilePath(path)),
        )(sound.files);
    }

    public play() {
        this.gainNode = createSoundGainNode();
        const currentGain = this.gainNode;

        this.shuffle();
        const audioElement = new Audio(this.filePaths[0]);
        const audioNode = ctx.createMediaElementSource(audioElement);

        audioNode.connect(this.gainNode);
        audioElement.currentTime = 0;
        audioElement.play();

        audioElement.onended = () => currentGain.disconnect();

    }

    public mute() {
        this.gainNode.gain
            .linearRampToValueAtTime(0, ctx.currentTime + 1);
        this.gainNode.disconnect();

        this.gainNode = createSoundGainNode();
    }

    private shuffle() {
        this.filePaths = shuffle(this.filePaths);
    }
}
