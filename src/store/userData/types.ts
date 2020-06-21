export type UIState = {
    sidebarWidth: number;
    isDragging: boolean;
    isResizing: boolean;
}

export type UserActivity = {
    lastAudioPath?: string;
    lastImagesPath?: string;
}

export type UserDataState = {
   ui: UIState;
   activity: UserActivity;
}
