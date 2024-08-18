'use client'

import {createContext, Dispatch, SetStateAction, useContext} from "react";
import {MenuItemType} from "@/app/models/menuItemType";
import useMenuItems from "../../../hooks/useMenuItems";
import {LoadingState} from "@/app/models/models";

type ContextProps = {
    menuItems : MenuItemType[],
    selectedMenuItem: MenuItemType | any,
    setSelectedMenuItem: Dispatch<SetStateAction<MenuItemType>> | any,
    setVersion: Dispatch<SetStateAction<number>> | any,
    loadingState: LoadingState
}

const GlobalContext = createContext<ContextProps>({
    menuItems: [],
    selectedMenuItem: { id : 0, index: 0, name: "", children: [], hasParent:false },
    setVersion: () : number => 0,
    setSelectedMenuItem: (): MenuItemType =>  { return {id : 0, index: 0, name: "", children: [], hasParent:false }},
    loadingState: LoadingState.Loading
})

// @ts-ignore
export const GlobalContextProvider = ({ children }) => {
    const {menuItems, selectedMenuItem, setVersion, setSelectedMenuItem, loadingState} = useMenuItems();

    return (
        <GlobalContext.Provider value={{ menuItems, selectedMenuItem, setSelectedMenuItem, setVersion, loadingState}} >
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);