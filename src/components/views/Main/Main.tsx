import * as React from 'react';
import { useTranslation } from 'react-i18next';

export const Main: React.FC = () => {
    const { t } = useTranslation();

    return (
        <h1 style={{ background: 'white' }}>{t('general.languageName')}</h1>
    );
};
