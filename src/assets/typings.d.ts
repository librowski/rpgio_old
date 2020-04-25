import 'styled-components';

declare module '*.svg' {
    const content: string;
    export default content;
}

declare module '*.ttf' {
    const content: string;
    export default content;
}

declare module 'styled-components' {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface DefaultTheme extends Theme { }
}
