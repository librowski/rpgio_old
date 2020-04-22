const app = {
    getVersion: jest.fn(),
};

const appWindow = {
    quit: jest.fn(),
    minimize: jest.fn(),
    maximize: jest.fn(),
};

export { app, appWindow };
