import { Sound } from '@player/audio/Sound';
import { SoundModel } from '@store/sounds/types';

export const sounds: Record<string, Sound> = {};

export const playSound = (model: SoundModel) => {
    if (!sounds[model.name]) {
        sounds[model.name] = new Sound(model);
    }

    sounds[model.name].play();
}

export const muteSound = ({ name }: SoundModel) =>
    sounds[name]?.mute();

