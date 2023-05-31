import MenuBar from "./menuBar"
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ContentPane from './contentPane'


export type MenuItemType = {
    id: number;
    index: number;
    name: string;
    children: MenuItemType[];
    hasParent?: boolean;
    numberOfImages: number;
}   
export enum PresentationStyle {
    ThumbnailList,
    ImageSlideshow
}

export interface MenuItemProps {
    menuItems?: MenuItemType[];
    menuItem: MenuItemType | undefined;
    setSelectedMenuItem: Dispatch<SetStateAction<any>>;
    selectedMenuItem: MenuItemType | undefined;
    setPresentationStyle: Dispatch<SetStateAction<any>>;
}

const App = () => { 
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
    }, [])
    return (
        <>
        <div className="container">
        <MenuBar key={selectedMenuItem && selectedMenuItem.id} menuItem={selectedMenuItem} setSelectedMenuItem={setSelectedMenuItem} selectedMenuItem={selectedMenuItem} menuItems={menuItems} setPresentationStyle={setPresentationStyle}/>
        <ContentPane selectedMenuItem={selectedMenuItem} presentationStyle={presentationStyle} setPresentationStyle={setPresentationStyle}/>
        </div>
        </>
        );
};

export default App;