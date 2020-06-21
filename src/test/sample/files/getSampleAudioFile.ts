import { app } from '@electron/electron';
import path from 'path';

export const getSampleAudioFile = (name: string) =>
    process.env.NODE_ENV === 'test'
        ? `${__dirname}/${name}`
        : path.resolve(app.getAppPath(), '../test/sample/files', name);
