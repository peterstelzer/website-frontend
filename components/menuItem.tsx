import { MenuItemType } from './menuBar';
import { Dispatch, SetStateAction } from "react";

interface MenuItemProps {
    menuItem: MenuItemType;
    setSelectedMenuItemId: Dispatch<SetStateAction<any>>;
    selectedMenuItemId: number
}

const MenuItem  = ({ menuItem, setSelectedMenuItemId, selectedMenuItemId }: MenuItemProps) => {
    const link:string ="page.mvc?menuId=" + menuItem.id;
    const clasz:string = selectedMenuItemId == menuItem.id ? 
        menuItem.hasParent ? "selectedsubnavbar" : "selectednavbar" :
        menuItem.hasParent ? "subnavbar" : "navbar"
    const setSelected = () => { setSelectedMenuItemId(menuItem.id); return false; }
    const isAChildSelected = menuItem.children.some(item => item.id == selectedMenuItemId)
    return (
        <>
            <li>
                <a className={ clasz } /*href={link}*/ onClick={setSelected}>{menuItem.name}</a>
            </li>
            { (menuItem.id == selectedMenuItemId  || isAChildSelected) && 
                menuItem.children.map(menu => 
                <MenuItem key={menu.id} menuItem={menu} setSelectedMenuItemId={setSelectedMenuItemId} selectedMenuItemId={selectedMenuItemId} />)
            }
            
            </>
   );
};

export default MenuItem;