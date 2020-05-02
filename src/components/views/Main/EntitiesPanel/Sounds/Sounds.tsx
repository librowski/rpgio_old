import * as React from 'react';
import { Container } from './Container';
import { SortableButtonList, } from '../SortableButtonList/SortableButtonList';
import * as _ from 'lodash/fp';
import { Header } from '../../../../shared/typography/Header';
import {
    SortableCollection
} from '../SortableButtonList/SortableButton/SortableButton';

const fakeSounds: SortableCollection = [
    { name: 'Footsteps', onClick: _.noop },
    { name: 'Dragon roar', onClick: _.noop },
    { name: 'Thunder', onClick: _.noop },
    { name: 'Radio noise', onClick: _.noop },
    { name: 'Gun shot', onClick: _.noop },
];

export const Sounds: React.FC = () => (
    <Container>
        <Header>Sounds</Header>
        <SortableButtonList
            collection={fakeSounds}
            handleSortStart={_.noop}
            handleSortEnd={_.noop}
        />
    </Container>
);
