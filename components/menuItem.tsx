import { MenuItemType, MenuItemProps } from './app';
import { Dispatch, SetStateAction } from "react";



const MenuItem  = ({ menuItem, setSelectedMenuItem, selectedMenuItem }: MenuItemProps) => {
    var clasz:string = '';
    if (selectedMenuItem && menuItem){
        clasz= selectedMenuItem && selectedMenuItem.id == menuItem.id ? 
        menuItem.hasParent ? "selectedsubnavbar" : "selectednavbar" :
        menuItem.hasParent ? "subnavbar" : "navbar"
    }
    //const link:string ="page.mvc?menuId=" + menuItem.id;
    const setSelected = () => { 
        if (menuItem && setSelectedMenuItem) 
        {
             setSelectedMenuItem(menuItem);
        }; 
        return false; 
    }
    const isAChildSelected = menuItem && menuItem.children.some(item => item.id == (selectedMenuItem && selectedMenuItem.id));
    return (
        <>
            <li>
                <a className={ clasz } /*href={link}*/ onClick={setSelected}>{menuItem && menuItem.name}</a>
            </li>
            { ((menuItem && menuItem.id) == (selectedMenuItem && selectedMenuItem.id)  || isAChildSelected) && 
                menuItem && menuItem.children.map(menu => 
                <MenuItem key={menu.id} menuItem={menu} setSelectedMenuItem={setSelectedMenuItem} selectedMenuItem={selectedMenuItem} />)
            }
            
            </>
   );
};

export default MenuItem;