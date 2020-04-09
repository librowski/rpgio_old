/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line import/no-extraneous-dependencies
const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
        darkTheme: true,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            webSecurity: false, // It allows using <audio> element with local files (disables same-origin policy)
            allowRunningInsecureContent: false, // But thanks to this one, https pages are still not allowed to run JavaScript, CSS or plugins from http URLs
        },
    });

    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '../build/index.html'),
        protocol: 'file:',
        slashes: true
    });

    mainWindow.loadURL(startUrl);
    mainWindow.on('closed', () => mainWindow = null);
    mainWindow.webContents.openDevTools();

    if ('--with-devtools' in process.execArgv) {
        // DEVTOOLS
        // eslint-disable-next-line import/no-extraneous-dependencies
        const { default: installExtension, REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } = require('electron-devtools-installer');
        installExtension(REACT_DEVELOPER_TOOLS);
        installExtension(REDUX_DEVTOOLS);
    }
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function() {
    if (mainWindow === null) {
        createWindow();
    }
});

app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');
