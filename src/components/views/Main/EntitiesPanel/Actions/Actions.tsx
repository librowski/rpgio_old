import * as React from 'react';
import { Container } from './Container';
import { SortableButtonList, } from '../SortableButtonList/SortableButtonList';
import * as _ from 'lodash/fp';
import { Header } from '../../../../shared/typography/Header';
import { useDispatch, useSelector } from 'react-redux';
import { SortEnd } from 'react-sortable-hoc';
import { actionsSelector } from '../../../../../store/actions/selectors';
import { Action } from '../../../../../store/actions/types';
import {
    performAction,
    reorderAction
} from '../../../../../store/actions/actions';

export const Actions: React.FC = () => {
    const dispatch = useDispatch();
    const actions = useSelector(actionsSelector);

    const sortableActionCollection = _.map(
        (action: Action) => ({
            ...action,
            onClick: () => dispatch(performAction(action.name))
        })
    )(actions);

    const handleSortEnd = ({ oldIndex, newIndex }: SortEnd) =>
        dispatch(reorderAction({ oldIndex, newIndex }));

    return (
        <Container>
            <Header>Actions</Header>
            <SortableButtonList
                collection={sortableActionCollection}
                handleSortEnd={handleSortEnd}
            />
        </Container>
    );
}
