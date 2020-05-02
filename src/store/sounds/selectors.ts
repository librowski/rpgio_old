import { RootState } from '../store';

export const soundsSelector = ({ sounds }: RootState) =>
    sounds.sounds;
