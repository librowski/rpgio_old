import { store } from '@store/store';
import { setLastAudioPath } from '@store/userData/userData';
import { app, appWindow, dialog } from '@electron/electron';

const getAudioPath = () =>
    store.getState().userData.activity.lastAudioPath;

const setAudioPath = (path: string) =>
    store.dispatch(setLastAudioPath(path)) && app.getPath('home');

export const openAudioFiles = () => {
    const openOptions = {
        filters: [{ name: 'Audio Files', extensions: ['mp3', 'wav', 'm4a'] }],
        properties: ['openFile', 'multiSelections'],
        title: 'Open files',
        defaultPath: getAudioPath()
    };

    const paths = dialog.showOpenDialogSync(
        appWindow,
        openOptions
    );

    setAudioPath(paths?.[0]);
    return paths;
};
