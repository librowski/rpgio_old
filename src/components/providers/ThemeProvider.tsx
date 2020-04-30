import * as React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { GlobalStyle } from '../shared/styles/GlobalStyle';
import { theme } from '../shared/styles/theme';
import { useSelector } from 'react-redux';
import { uiDataSelector } from '../../store/userData/selectors';

export const ThemeProvider: React.FC = ({ children }) => {
    const uiData = useSelector(uiDataSelector);

    return (
        <StyledThemeProvider theme={theme}>
            <GlobalStyle {...uiData} />
            { children }
        </StyledThemeProvider>
    );
}
