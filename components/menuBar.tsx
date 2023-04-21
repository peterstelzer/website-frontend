import MenuItem from "./menuItem";
import { useEffect, useState } from "react";

export type MenuItemType = {
    id: number;
    index: number;
    name: string;
    children: MenuItemType[];
    hasParent?: boolean;
}   

const MenuBar = () => {
    const [selectedMenuItemId, setSelectedMenuitemId] = useState<number>();
    const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);
    useEffect(() => {
        const fetchMenuItems = async () => {
            const response:void | Response = await fetch("http://localhost:8080/api/menuItems")
            const menuItems = await response.json();
            setMenuItems(menuItems);
        }
        fetchMenuItems();

    })
    return (
        <>
    <nav>   
      <ul>
      {menuItems.map(menu => (
      <MenuItem key={menu.id} menuItem={menu} setSelectedMenuItemId={setSelectedMenuitemId} selectedMenuItemId={selectedMenuItemId} />
      ))}
      
      </ul>
    </nav>
    </>);
};


export default MenuBar;