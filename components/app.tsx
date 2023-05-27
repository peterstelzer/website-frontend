import MenuBar from "./menuBar"
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ContentPane from './contentPane'



export type MenuItemType = {
    id: number;
    index: number;
    name: string;
    children: MenuItemType[];
    hasParent?: boolean;
}   
export interface MenuItemProps {
    menuItems?: MenuItemType[];
    menuItem: MenuItemType | undefined;
    setSelectedMenuItem: Dispatch<SetStateAction<any>>;
    selectedMenuItem: MenuItemType | undefined;
}

const App = () => { 
    const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);
    const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItemType>();
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
        <MenuBar key={selectedMenuItem && selectedMenuItem.id} menuItem={selectedMenuItem} setSelectedMenuItem={setSelectedMenuItem} selectedMenuItem={selectedMenuItem} menuItems={menuItems}/>
        <ContentPane selectedMenuItem={selectedMenuItem} />
        </div>
        </>
        );
};

export default App;