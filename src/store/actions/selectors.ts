import { RootState } from '../store';

export const actionsSelector = ({ actions }: RootState) =>
    actions.actions;
