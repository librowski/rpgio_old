export type Scene = {
    name: string;
    imageURL: string;
}

export type ScenesState = {
    scenes: Scene[];
    activeSceneName: string;
}
