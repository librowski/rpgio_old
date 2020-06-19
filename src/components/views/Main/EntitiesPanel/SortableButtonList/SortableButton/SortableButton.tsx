import * as React from 'react';
import { Container } from './Container';
import { Text } from '@components/shared/typography/Text';
import { SortableElement } from 'react-sortable-hoc';
import { Background } from './Background';
import { useSelector } from 'react-redux';
import { uiDataSelector } from '@store/userData/selectors';
import styled from 'styled-components';

export type SortableCollection = Props[];

type Props = {
    name: string;
    onClick: () => void;
};

const Name = styled(Text)`
    z-index: 1;
    white-space: nowrap;
`;

const Button: React.FC<Props> = ({ name,...rest }) => {
    const { isDragging } = useSelector(uiDataSelector);

    return (
        <Container isDragging={isDragging} {...rest}>
            <Background />
            <Name size='lg'>
                { name }
            </Name>
        </Container>
    );
}

export const SortableButton = SortableElement(Button);
