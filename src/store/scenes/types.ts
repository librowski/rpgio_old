export type Scene = {
    name: string;
    imageURL: string;
    order: number;
}

export type ScenesState = {
    scenes: Scene[];
    activeSceneName: string;
}
