'use client'

import {useEffect, useState} from "react";
import {MenuItemType} from "@/app/models/menuItemType";
import {LoadingState} from "@/app/models/models";
import * as menuItemsApi from "../api/menuItems/menuItems"

export type CommentType = {
    id: number;
    menuItemContentId: number;
    comment: string;
    commenterName: string;
    enteredDate: string;
}

const useMenuItems = () => {
    const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);
    const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItemType>();
    const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.Loading);
    const [version, setVersion] = useState<number>(0);

    useEffect(() => {
        const fetchMenuItems = async (version: number) => {
            setLoadingState(LoadingState.Loading);
            try {
                await menuItemsApi.getMenuItems(version).then((response) => setMenuItems(response));
            } catch {
                setLoadingState(LoadingState.Error)
            }
            setLoadingState(LoadingState.Loaded)
        }
        fetchMenuItems(version);
    }, [version]);
    return {menuItems, setMenuItems, selectedMenuItem, setSelectedMenuItem, version, setVersion, loadingState };

}

export default useMenuItems;