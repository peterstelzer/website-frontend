import { MenuItemType } from "components/app";
import { useEffect, useState } from "react";
import { PresentationStyle } from "components/app";

export type CommentType = {
    id: number;
    comment: number;
    username: string;
    enteredDate: string;
}

const useMenuItems = () => {
    const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);
    const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItemType>();
    const [presentationStyle, setPresentationStyle] = useState<PresentationStyle>();
    const configUrl = process.env.NEXT_PUBLIC_CONFIG_URL ? process.env.NEXT_PUBLIC_CONFIG_URL : "http://localhost:8000";

    useEffect(() => {
        const fetchMenuItems = async () => {
            const response:void | Response = await fetch(configUrl + "/api/menuItems")
            const menuItems = await response.json();
            setMenuItems(menuItems);
            setSelectedMenuItem(menuItems[0]);
        }
        fetchMenuItems();
    }, []);
    return {menuItems, selectedMenuItem, setSelectedMenuItem, presentationStyle, setPresentationStyle };

}

export default useMenuItems;