const { getAudioDurationInSeconds: _getAudioDurationInSeconds } =
    window.require('get-audio-duration');

export const getFilePath = (path: string) =>
    `file:///${path}`;

export const getAudioDurationInSeconds =
    _getAudioDurationInSeconds;
