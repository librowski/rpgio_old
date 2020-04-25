import { RootState } from '../store';

export const sidebarWidthSelector = ({ userData }: RootState) =>
    userData.ui.sidebarWidth;

export const entitiesPanelWidthSelector = ({ userData }: RootState) =>
    window.innerWidth - userData.ui.sidebarWidth;
