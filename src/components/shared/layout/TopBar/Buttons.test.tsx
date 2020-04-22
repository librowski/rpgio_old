import { Buttons, maximizeButtonTestId, minimizeButtonTestId } from './Buttons';
import React from 'react';
import { mount } from '../../../../test/enzyme';
import { maximize, minimize, quit } from '../../../../store/app/app';
import { Maximize, Minus, X } from 'react-feather';
import {
    createSpectronApp,
    getByTestId,
    start,
    teardown
} from '../../../../test/spectron';
import { Application } from 'spectron';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => jest.fn(),
}));

jest.mock('../../../../store/app/app', () => ({
    ...jest.requireActual('../../../../store/app/app'),
    maximize: jest.fn(),
    minimize: jest.fn(),
    quit: jest.fn(),
}));

describe('[UNIT] <Buttons />', () => {
    it('should call maximize() if maximize button was clicked', () => {
        const wrapper = mount(
            <Buttons />
        );

        const maximizeButton = wrapper.find(Maximize);

        maximizeButton.simulate('click');

        expect(maximize)
            .toHaveBeenCalled();
    });

    it('should call minimize() if minimize button was clicked', () => {
        const wrapper = mount(
            <Buttons />
        );

        const minimizeButton = wrapper.find(Minus);

        minimizeButton.simulate('click');

        expect(minimize)
            .toHaveBeenCalled();
    });

    it('should call quit() if quit button was clicked', () => {
        const wrapper = mount(
            <Buttons />
        );

        const quitButton = wrapper.find(X);

        quitButton.simulate('click');

        expect(quit)
            .toHaveBeenCalled();
    });
});

describe('[E2E] <Buttons />', () => {
    jest.dontMock('../../../../electron/electron');
    let app: Application;

    beforeEach(async () => {
        app = createSpectronApp();
        await start(app);
    });

    afterEach(async () => await teardown(app));

    it('should minimize window when minimize button was clicked', async () => {
        const minimizeButton = getByTestId(app, minimizeButtonTestId);
        await minimizeButton.click();

        const isMinimized = await app.browserWindow.isMinimized();
        expect(isMinimized)
            .toBe(true);
    });


    it('should maximize window when maximize button was clicked', async () => {
        const maximizeButton = getByTestId(app, maximizeButtonTestId);
        await maximizeButton.click();

        const isMaximized = await app.browserWindow.isMaximized();
        expect(isMaximized)
            .toBe(true);
    });
});
