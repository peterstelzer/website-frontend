import MenuItem from "./menuItem";
import { MenuItemType, MenuItemProps } from './app';
import { useEffect, useState } from "react";



const MenuBar = ({ menuItem, setSelectedMenuItem, selectedMenuItem, menuItems, setPresentationStyle }: MenuItemProps) => {

    return (
        <>
    <nav>   
      <ul>
      {menuItems && menuItems.map(menu => (
          <MenuItem key={menu.id} menuItem={menu} setSelectedMenuItem={setSelectedMenuItem} selectedMenuItem={selectedMenuItem} setPresentationStyle={setPresentationStyle}/>
      ))}
      
      </ul>
    </nav>
    </>);
};


export default MenuBar;