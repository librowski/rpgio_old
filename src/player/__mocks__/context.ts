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

export const soundsNode = createFakeGainNode();
export const scenesNode = createFakeGainNode();
export const tracksNode = createFakeGainNode();

export const ctx = {
    destination: {},
    createMediaElementSource: jest.fn(() => createFakeAudioNode()),
    createGain: jest.fn(() => createFakeGainNode()),
};
