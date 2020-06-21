const createFakeGainNode = () => ({
    connect: jest.fn(),
    disconnect: jest.fn(),
    gain: {
        linearRampToValueAtTime: jest.fn(),
    }
});

const createFakeAudioNode = () => ({
    connect: jest.fn(),
    disconnect: jest.fn(),
});

const ctx = {
    destination: {},
    createMediaElementSource: jest.fn(() => createFakeAudioNode()),
    createGain: jest.fn(() => createFakeGainNode()),
};

export const createContext = () => ({
    ctx,
    mainNode: createFakeGainNode(),
    soundsNode: createFakeGainNode(),
    scenesNode: createFakeGainNode(),
    tracksNode: createFakeGainNode(),
})

