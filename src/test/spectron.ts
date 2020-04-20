import { Application } from 'spectron';
import path from 'path';
const electronPath = path.join(
    __dirname, '../../', 'node_modules', '.bin', 'electron'
);
const appPath = path.join(__dirname, '../electron/main.js');

export const createAppWrapper = () => {
    const app = new Application({
        path: electronPath,
        args: [appPath],
    });

    const start = async () => await app.start();

    const teardown = async () => {
        if (app?.isRunning()) {
            await app.stop();
        }
    };

    const getByTestId = (testId: string) =>
        app.client.$(`[data-test-id="${testId}"]`);

    return {
        app,
        start,
        teardown,
        getByTestId
    }
}

