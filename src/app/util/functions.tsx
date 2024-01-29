import {MenuItemType} from "../models/menuItemType";

export default function retrieveMenuItem (myMenuItems: MenuItemType[], currentMenuItemId:number) : MenuItemType | undefined {
    for (let menuItem of myMenuItems){
        if (menuItem.id == currentMenuItemId){
            return menuItem;
        }
        if (menuItem.children.length > 0){
            const  result:MenuItemType|undefined =  retrieveMenuItem(menuItem.children, currentMenuItemId);
            if (result !== undefined){
                return result;
            }
        }
    }
}
