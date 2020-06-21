import { SoundModel } from '@store/sounds/types';
import { getFilePath } from '../files/utils';
import * as _ from 'lodash/fp';
import { ctx, soundsNode } from '../context';
import { shuffle } from '@store/utils';

export class Sound {
    private filePaths: string[];
    private gainNode: GainNode;

    constructor(sound: SoundModel) {
        this.filePaths = _.flowRight(
            _.map(({ path }) => getFilePath(path)),
        )(sound.files);

        this.gainNode = ctx.createGain();
        this.gainNode.connect(soundsNode);
    }

    public play() {
        this.gainNode.gain.linearRampToValueAtTime(1, ctx.currentTime + 1);
        this.shuffle();
        const audioElement = new Audio(this.filePaths[0]);
        const audioNode = ctx.createMediaElementSource(audioElement);
        audioNode.connect(this.gainNode);
        audioElement.src = this.filePaths[0];
        audioElement.currentTime = 0;
        audioElement.play();
    }

    public mute() {
        this.gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 1);
        this.gainNode.disconnect();
        this.gainNode = ctx.createGain();

        this.gainNode.connect(soundsNode);
    }

    private shuffle() {
        this.filePaths = shuffle(this.filePaths);
    }
}
