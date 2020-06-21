const { app, dialog, getCurrentWindow } = window.require('electron').remote;

const appWindow = getCurrentWindow();

export { app, dialog, appWindow };
