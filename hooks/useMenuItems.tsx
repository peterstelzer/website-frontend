import { MenuItemType } from "components/app";
import { useEffect, useState } from "react";
import { PresentationStyle } from "components/app";


const useMenuItems = () => {
    const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);
    const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItemType>();
    const [presentationStyle, setPresentationStyle] = useState<PresentationStyle>();
    useEffect(() => {
        const fetchMenuItems = async () => {
            const response:void | Response = await fetch("http://localhost:8080/api/menuItems")
            const menuItems = await response.json();
            setMenuItems(menuItems);
            setSelectedMenuItem(menuItems[0]);
        }
        fetchMenuItems();
    }, []);
    return {menuItems, selectedMenuItem, setSelectedMenuItem, presentationStyle, setPresentationStyle };

}

export default useMenuItems;