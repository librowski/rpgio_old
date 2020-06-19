import * as React from 'react';
import { Container } from './Container';
import { SortableButtonList, } from '../SortableButtonList/SortableButtonList';
import * as _ from 'lodash/fp';
import { Header } from '../../../../shared/typography/Header';
import { useDispatch, useSelector } from 'react-redux';
import { soundsSelector } from '@store/sounds/selectors';
import { playSound, reorderSound } from '@store/sounds/sounds';
import { Sound } from '@store/sounds/types';
import { SortEnd } from 'react-sortable-hoc';

export const Sounds: React.FC = () => {
    const dispatch = useDispatch();
    const sounds = useSelector(soundsSelector);

    const sortableSoundCollection = _.map(
        (sound: Sound) => ({
            ...sound,
            onClick: () => dispatch(playSound(sound.name))
        })
    )(sounds);

    const handleSortEnd = ({ oldIndex, newIndex }: SortEnd) =>
        dispatch(reorderSound({ oldIndex, newIndex }));

    return (
        <Container>
            <Header>Sounds</Header>
            <SortableButtonList
                collection={sortableSoundCollection}
                handleSortEnd={handleSortEnd}
            />
        </Container>
    );
}
