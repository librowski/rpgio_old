/* eslint-disable */
import 'jest-styled-components'
import 'jest-enzyme';

window.require = require;

jest.mock('../i18n/i18n', () => ({
    i18n: jest.fn()
}));
