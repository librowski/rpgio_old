import { SoundModel } from '@store/sounds/types';
import { getSampleAudioFile } from '@test/sample/files/getSampleAudioFile';

export const sounds: SoundModel[] = [
    {
        name: 'Bottle',
        files: [
            {
                name: 'bottle',
                path: getSampleAudioFile('bottle.wav'),
                duration: 2,
            }
        ]
    },
    {
        name: 'Coin',
        files: [
            {
                name: 'coin',
                path: getSampleAudioFile('coin.wav'),
                duration: 2,
            }
        ]
    },
    {
        name: 'Bubbling water',
        files: [
            {
                name: 'bubble',
                path: getSampleAudioFile('bubble.wav'),
                duration: 2,
            }
        ]
    },
    {
        name: 'Swing',
        files: [
            {
                name: 'swing',
                path: getSampleAudioFile('swing.wav'),
                duration: 2,
            }
        ]
    },
    {
        name: 'Sword swoosh',
        files: [
            {
                name: 'sword',
                path: getSampleAudioFile('sword.wav'),
                duration: 2,
            }
        ]
    },
];
