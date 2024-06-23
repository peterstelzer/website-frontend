export type MenuItemType = {
    id: number;
    index: number;
    name: string;
    children: MenuItemType[];
    hasParent?: boolean;
}