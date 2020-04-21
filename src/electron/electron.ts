const { app, getCurrentWindow } = window.require('electron').remote;

const appWindow = getCurrentWindow();

export { app, appWindow };
