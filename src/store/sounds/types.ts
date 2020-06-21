import { AudioFile } from '@store/types';

export type SoundModel = {
    name: string;
    files: AudioFile[];
    scene?: string;
    shortcut?: string;
}

export type SoundsState = {
    sounds: SoundModel[];
};
