import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-electron-language-detector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        initImmediate: false,
        fallbackLng: 'en',
        whitelist: ['en', 'pl'],
        nonExplicitWhitelist: true,
        resources: {
            en: {
                translation: require('./locales/en.json'),
            },
            pl: {
                translation: require('./locales/pl.json'),
            },
        },
        debug: process.env.NODE_ENV === 'development',
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
            wait: true,
        },
    });

export { i18n };
