/* eslint-disable @typescript-eslint/no-var-requires */
const WEB_AUDIO_INSPECTOR = 'cmhomipkklckpomafalojobppmmidlgl';

const installDevtools = () => {
    const {
        default: installExtension,
        REACT_DEVELOPER_TOOLS,
        REDUX_DEVTOOLS,
    } = require('electron-devtools-installer');
    installExtension(REACT_DEVELOPER_TOOLS);
    installExtension(REDUX_DEVTOOLS);
    installExtension(WEB_AUDIO_INSPECTOR);
};

module.exports = { installDevtools };
