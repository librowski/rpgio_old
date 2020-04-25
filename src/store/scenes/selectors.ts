import { RootState } from '../store';

export const scenesSelector = ({ scenes }: RootState) =>
    scenes.scenes;
