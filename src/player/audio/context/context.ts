import { createContext } from '@player/audio/context/createContext';

const {
    ctx,
    soundsNode,
} = createContext();

export { ctx };

export const createSoundGainNode = () => {
    const gainNode = ctx.createGain();
    gainNode.connect(soundsNode);

    return gainNode;
}

