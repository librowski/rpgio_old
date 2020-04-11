import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './locales/en';
import { pl } from './locales/pl';
import { ru } from './locales/ru';
const LanguageDetector = window.require('i18next-electron-language-detector');

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        initImmediate: false,
        fallbackLng: 'en',
        whitelist: ['en', 'pl', 'ru'],
        nonExplicitWhitelist: true,
        resources: {
            en: {
                translation: en,
            },
            pl: {
                translation: pl,
            },
            ru: {
                translation: ru,
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
