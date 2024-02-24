'use client'

import {MenuItemType} from "@/app/models/menuItemType";
import {ImagePaneDetailsType} from "../../hooks/useMenuItemContent";

export async function getMenuItems(): Promise<MenuItemType[]> {
    const configUrl = process.env.NEXT_PUBLIC_CONFIG_URL ? process.env.NEXT_PUBLIC_CONFIG_URL : "http://localhost:8000";
    const apiKey = process.env.NEXT_PUBLIC_BASIC_AUTH_CREDS ? process.env.NEXT_PUBLIC_BASIC_AUTH_CREDS : "N/A";
    const response:void | Response = await fetch(configUrl + "/api/menuItems", {
        headers: {
            "Authorization": "Basic " + apiKey
        }
    });
    return await response.json();
}

export async function getMenuItemContent(selectedMenuItem: MenuItemType | undefined): Promise<ImagePaneDetailsType> {
    const configUrl = process.env.NEXT_PUBLIC_CONFIG_URL ? process.env.NEXT_PUBLIC_CONFIG_URL : "http://localhost:8000";
    const url = configUrl + "/api/menuItemContent?menuItemId="+selectedMenuItem?.id;
    const apiKey = process.env.NEXT_PUBLIC_BASIC_AUTH_CREDS ? process.env.NEXT_PUBLIC_BASIC_AUTH_CREDS : "N/A";
    const response:void | Response = await fetch(url, {
        headers: {
            "Authorization": "Basic " + apiKey
        }
    });
    return await response.json();
}