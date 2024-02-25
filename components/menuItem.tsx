import Link from "next/link";
import {useGlobalContext} from "@/app/context/store";
import {MenuItemType} from "@/app/models/menuItemType";

type MenuItemProps = {
    menuItem: MenuItemType | undefined;
}

const MenuItem  = ({ menuItem }: MenuItemProps) => {
    const {selectedMenuItem, setSelectedMenuItem} = useGlobalContext();

    let clasz:string = '';
    if (selectedMenuItem && menuItem){
        const isMenuItemCurrentlySelected = menuItem.id === selectedMenuItem.id;
        const isChildMenuItem = menuItem.hasParent;
        if (isMenuItemCurrentlySelected && isChildMenuItem){
            clasz = "selectedsubnavbar";
        } else if (isMenuItemCurrentlySelected && ! isChildMenuItem) {
            clasz = "selectednavbar";
        } else if (!isMenuItemCurrentlySelected && isChildMenuItem) {
            clasz = "subnavbar";
        } else {
            clasz = "navbar";
        }
    }
    const isAChildSelected = menuItem?.children.some(item => item.id == (selectedMenuItem?.id));
    return (
        <>
            <li>
                <Link href={'/menuId/'+menuItem?.id} className={ clasz } onClick={() => setSelectedMenuItem(menuItem)}> {menuItem?.name} </Link>
            </li>
            { ((menuItem?.id) == (selectedMenuItem?.id)  || isAChildSelected) &&
                menuItem && menuItem.children.map(menu =>
                <MenuItem key={menu.id} menuItem={menu} />)
            }
        </>
   );
};

export default MenuItem;