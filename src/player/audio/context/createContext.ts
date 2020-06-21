export const createContext = () => {
    const ctx = new AudioContext();

    const mainNode = ctx.createGain();
    const scenesNode = ctx.createGain();
    const soundsNode = ctx.createGain();
    const tracksNode = ctx.createGain();

    mainNode.connect(ctx.destination);
    scenesNode.connect(mainNode);
    soundsNode.connect(mainNode);
    tracksNode.connect(mainNode);

    return {
        ctx,
        mainNode,
        scenesNode,
        soundsNode,
        tracksNode,
    }
}
