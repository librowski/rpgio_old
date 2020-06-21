import { Sound } from '@player/audio/Sound';
import { SoundModel } from '@store/sounds/types';

const sounds: Record<string, Sound> = {};

export const playSound = (model: SoundModel) => {
    const sound = new Sound(model);
    sounds[model.name] = sound;
    sound.play();
}

export const muteSound = (model: SoundModel) =>
    sounds[model.name]?.mute();

