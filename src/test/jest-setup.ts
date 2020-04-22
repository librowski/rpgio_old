/* eslint-disable */
import 'jest-styled-components'
import 'jest-enzyme';

window.require = require;

jest.setTimeout(10000);

jest.mock('../electron/electron');

jest.mock('../i18n/i18n', () => ({
    i18n: jest.fn()
}));
