import * as React from 'react';
import {
    SortableContainer,
    SortEndHandler,
    SortStartHandler
} from 'react-sortable-hoc';
import { Container } from './Container';
import { setDragging } from '@store/userData/userData';
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
    handleSortStart,
    handleSortEnd,
}) => {
    const dispatch = useDispatch();

    const onSortStart: SortStartHandler = (...sortStartParams) => {
        dispatch(setDragging(true));
        handleSortStart?.(...sortStartParams);
    };

    const onSortEnd: SortEndHandler = (...sortEndParams) => {
        dispatch(setDragging(false));
        handleSortEnd?.(...sortEndParams);
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
