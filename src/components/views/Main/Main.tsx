import * as React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: stretch;
    align-content: stretch;
    height: 100%;
`;

export const Main: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Container>
            { t('general.languageName') }
        </Container>
    );
};
