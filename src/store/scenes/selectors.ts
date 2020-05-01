import { RootState } from '../store';

export const scenesSelector = ({ scenes }: RootState) =>
    scenes.scenes;

export const activeSceneNameSelector = ({ scenes }: RootState) =>
    scenes.activeSceneName;
