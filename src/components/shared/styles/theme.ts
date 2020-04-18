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
        primaryText: '#868B98',
        secondaryText: '#6B717E',
    },
    sizes: {
        topBarHeight: 48,
    },
    zIndex: {
        content: 100,
        overlay: 200,
        fab: 300,
    }
};

export const getFromTheme = <N extends keyof Theme, K extends keyof Theme[N]>(
    namespace: N,
    key: K,
) => ({ theme }: { theme: Theme }) => theme[namespace][key];

export const getSize = (key: keyof typeof theme.sizes) =>
    getFromTheme('sizes', key);

export const getColor = (key: keyof typeof theme.colors) =>
    getFromTheme('colors', key);

export const getZIndex = (key: keyof typeof theme.zIndex) =>
    getFromTheme('zIndex', key);
