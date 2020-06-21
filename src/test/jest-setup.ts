/* eslint-disable */
import 'jest-styled-components'
import 'jest-enzyme';

window.require = require;

jest.setTimeout(10000);

jest.mock('@electron/electron');

jest.mock('@player/audio/context/createContext');
window.HTMLMediaElement.prototype.load = jest.fn();
window.HTMLMediaElement.prototype.play = jest.fn();
window.HTMLMediaElement.prototype.pause = jest.fn();
window.HTMLMediaElement.prototype.addTextTrack = jest.fn();

jest.mock('@i18n/i18n', () => ({
    i18n: jest.fn()
}));

