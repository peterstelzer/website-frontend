'use client'

import {createContext, useContext, Dispatch, SetStateAction } from "react";
import {MenuItemType} from "@/app/models/menuItemType";
import useMenuItems from "../../../hooks/useMenuItems";

interface ContextProps {
    menuItems : MenuItemType[],
    selectedMenuItem: MenuItemType | any,
    setSelectedMenuItem: Dispatch<SetStateAction<MenuItemType>> | any
}

const GlobalContext = createContext<ContextProps>({
    menuItems: [],
    selectedMenuItem: { id : 0, index: 0, name: "", children: [], hasParent:false,numberOfImages: 0 },
    setSelectedMenuItem: (): MenuItemType =>  { return {id : 0, index: 0, name: "", children: [], hasParent:false,numberOfImages: 0 }}
})

// @ts-ignore
export const GlobalContextProvider = ({ children }) => {
    const {menuItems, selectedMenuItem, setSelectedMenuItem} = useMenuItems();

    return (
        <GlobalContext.Provider value={{ menuItems, selectedMenuItem, setSelectedMenuItem}} >
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);