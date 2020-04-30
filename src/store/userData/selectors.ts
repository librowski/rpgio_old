import { RootState } from '../store';

export const uiDataSelector = ({ userData }: RootState) =>
    userData.ui;

