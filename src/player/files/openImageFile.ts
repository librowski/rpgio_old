import { store } from '@store/store';
import { setLastImagesPath } from '@store/userData/userData';
import { app, appWindow, dialog } from '@electron/electron';

const getImagesPath = () =>
    store.getState().userData.activity.lastImagesPath;

const setImagesPath = (path: string) =>
    store.dispatch(setLastImagesPath(path)) && app.getPath('home');

export const openImageFile = () => {
    const openOptions = {
        filters: [{ name: 'Images', extensions: ['jpg', 'png', 'gif'] }],
        properties: ['openFile'],
        title: 'Open files',
        defaultPath: getImagesPath()
    };

    const paths = dialog.showOpenDialogSync(
        appWindow,
        openOptions
    );
    setImagesPath(paths?.[0]);
    return paths;
};
