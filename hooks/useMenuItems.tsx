'use client'

import {useEffect, useState} from "react";
import {MenuItemType} from "@/app/models/menuItemType";
import {LoadingState} from "@/app/models/models";
import * as menuItemsApi from "../api/menuItems/menuItems"

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

    useEffect(() => {
        const fetchMenuItems = async () => {
            setLoadingState(LoadingState.Loading);
            try {
                await menuItemsApi.getMenuItems().then((response) => setMenuItems(response));
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