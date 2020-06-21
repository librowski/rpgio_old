/* eslint-disable max-len */
import { Scene, ScenesState } from '@store/scenes/types';

const scenes: Scene[] = [
    {
        name: 'Castle',
        imageURL: 'https://images.unsplash.com/photo-1544939514-aa98d908bc47?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
        name: 'City',
        imageURL: 'https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
    },
    {
        name: 'Forest',
        imageURL: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
    {
        name: 'Cave',
        imageURL: 'https://images.unsplash.com/photo-1422452098470-722310d3ad74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
    {
        name: 'Shore',
        imageURL: 'https://images.unsplash.com/photo-1495652715132-7aafc87c147e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
    },
    {
        name: 'Space',
        imageURL: 'https://images.unsplash.com/photo-1494022299300-899b96e49893?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
];

export const scenesState: ScenesState = {
    scenes,
}
