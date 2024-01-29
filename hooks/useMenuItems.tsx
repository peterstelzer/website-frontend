'use client'

import {useEffect, useState} from "react";
import {MenuItemType} from "@/app/models/menuItemType";
import {LoadingState} from "@/app/models/models";

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
    const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.Loading)
    const configUrl = process.env.NEXT_PUBLIC_CONFIG_URL ? process.env.NEXT_PUBLIC_CONFIG_URL : "http://localhost:8000";

    useEffect(() => {
        const fetchMenuItems = async () => {
            setLoadingState(LoadingState.Loading);
            try {
                const response:void | Response = await fetch(configUrl + "/api/menuItems")
                const menuItems = await response.json();
                setMenuItems(menuItems);
            } catch {
                setLoadingState(LoadingState.Error)
            }
            setLoadingState(LoadingState.Loaded)
        }
        fetchMenuItems();
    }, []);
    return {menuItems, setMenuItems, selectedMenuItem, setSelectedMenuItem, loadingState };

}

export default useMenuItems;