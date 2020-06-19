import * as React from 'react';
import { GlobalStyle } from '../shared/styles/GlobalStyle';
import { useSelector } from 'react-redux';
import { uiDataSelector } from '@store/userData/selectors';

export const GlobalStylesProvider: React.FC = ({ children }) => {
    const uiData = useSelector(uiDataSelector);

    return (
        <>
            <GlobalStyle {...uiData} />
            { children }
        </>
    );
}
