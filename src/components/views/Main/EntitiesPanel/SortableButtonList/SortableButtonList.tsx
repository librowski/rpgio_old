import * as React from 'react';
import {
    SortableContainer,
    SortEndHandler,
    SortStartHandler
} from 'react-sortable-hoc';
import { Container } from './Container';
import { setDragging } from '../../../../../store/userData/userData';
import { useDispatch } from 'react-redux';
import {
    SortableButton,
    SortableCollection
} from './SortableButton/SortableButton';

type Props = {
    collection: SortableCollection;
    handleSortStart?: SortStartHandler;
    handleSortEnd?: SortEndHandler;
};

const SortableList = SortableContainer(
    ({ collection }: Pick<Props, 'collection'>) => (
        <Container>
            {collection.map((itemProps, index) => (
                <SortableButton
                    key={itemProps.name}
                    index={index}
                    {...itemProps}
                />
            ))}
        </Container>
    )
);

export const SortableButtonList: React.FC<Props> = ({
    collection,
    ...rest
}) => {
    const dispatch = useDispatch();

    const onSortStart: SortStartHandler = (...sortStartParams) => {
        rest?.handleSortStart(...sortStartParams);
        dispatch(setDragging(true));
    };

    const onSortEnd: SortEndHandler = (...sortEndParams) => {
        rest?.handleSortEnd(...sortEndParams);
        dispatch(setDragging(false));
    };

    return (
        <SortableList
            onSortStart={onSortStart}
            onSortEnd={onSortEnd}
            collection={collection}
            axis='xy'
            pressDelay={100}
        />
    );
}
