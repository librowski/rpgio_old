declare global {
    type Theme = typeof theme;
}

export const theme = {
    colors: {
        background: '#121220',
        foregroundDark: '#090D10',
        foreground: '#14141D',
        foregroundLight: '#1B1B28',
        accentDark: '#33356f',
        accent: '#5959C6',
        textLight: '#DDDDDD',
        textPrimary: '#868B98',
        textSecondary: '#6B717E',
        scrollbarTrack: '#00000033',
        scrollbarThumb: '#868B9866'
    },
    sizes: {
        topBarHeight: 48,
        mainPadding: 32,
        sceneCardSpacing: 10,
        sceneNameBarHeight: 32,
        sidebarMinWidth: 320,
    },
    textSizes: {
        xl: 24,
        lg: 16,
        md: 14,
        sm: 12,
        xs: 11
    },
    zIndex: {
        content: 100,
        overlay: 200,
        fab: 300,
        topBar: 400,
    }
};

type NamespaceName = keyof Theme;
type Namespace<N extends NamespaceName> = Theme[N];
type Key<N extends NamespaceName> = keyof Namespace<N>;

export const getFromTheme = <N extends NamespaceName>(namespace: N) =>
    (key: Key<N>) => ({ theme }: { theme: Theme }) => theme[namespace][key];

export type Size = Key<'sizes'>;
export type Color = Key<'colors'>;
export type ZIndex = Key<'zIndex'>;
export type TextSize = Key<'textSizes'>;

export const getSize = getFromTheme('sizes');
export const getColor = getFromTheme('colors');
export const getZIndex = getFromTheme('zIndex');
export const getTextSize = getFromTheme('textSizes');
export const getProp = <P>(propName: keyof P) => (props: P) => props[propName];
