'use client'

import {useEffect, useState} from "react";
import {MenuItemType} from "@/app/models/menuItemType";

export type CommentType = {
    id: number;
    menuItemId: number;
    comment: string;
    commenterName: string;
    enteredDate: string;
}

const useMenuItems = () => {
    const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);
    const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItemType>();
    const configUrl = process.env.NEXT_PUBLIC_CONFIG_URL ? process.env.NEXT_PUBLIC_CONFIG_URL : "http://localhost:8000";

    useEffect(() => {
        const fetchMenuItems = async () => {
            const response:void | Response = await fetch(configUrl + "/api/menuItems")
            const menuItems = await response.json();
            setMenuItems(menuItems);
        }
        fetchMenuItems();
    }, []);
    return {menuItems, setMenuItems, selectedMenuItem, setSelectedMenuItem };

}

export default useMenuItems;