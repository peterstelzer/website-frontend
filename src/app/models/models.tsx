import {MenuItemType} from "@/app/models/menuItemType";


export enum PresentationStyle {
    ThumbnailList,
    ImageSlideshow
}

export interface MenuItemProps {
    menuItem: MenuItemType | undefined;
}

export enum LoadingState {
    Loading,
    Loaded,
    Error
}