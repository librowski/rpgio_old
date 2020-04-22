import { Application } from 'spectron';
import path from 'path';

const electronPath = path.join(
    __dirname, '../../', 'node_modules', '.bin', 'electron'
);
const appPath = path.join(__dirname, '../electron/main.js');

export const createSpectronApp = () => new Application({
    path: electronPath,
    args: [appPath],
});

export const start = async (app: Application) => {
    await app.start();
    await app.client.waitUntilWindowLoaded();
};

export const teardown = async (app: Application) => {
    if (app?.isRunning()) {
        await app.stop();
    }
};

export const getByTestId = (app: Application, testId: string) =>
    app.client.$(`[data-test-id="${testId}"]`);

