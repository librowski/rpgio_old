import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
const LanguageDetector = window.require('i18next-electron-language-detector');

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        initImmediate: false,
        fallbackLng: 'en',
        whitelist: ['en'],
        nonExplicitWhitelist: true,
        resources: {
            en: {
                translation: require('./locales/en.json'),
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
