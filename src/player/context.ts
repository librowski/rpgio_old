export const ctx = new AudioContext();

const mainNode = ctx.createGain();
export const scenesNode = ctx.createGain();
export const soundsNode = ctx.createGain();
export const tracksNode = ctx.createGain();

mainNode.connect(ctx.destination);
scenesNode.connect(mainNode);
soundsNode.connect(mainNode);
tracksNode.connect(mainNode);
