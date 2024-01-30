import {MenuItemProps} from '@/app/models/models';
import Link from "next/link";
import {useGlobalContext} from "@/app/context/store";

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
    return (
            <li>
                <Link href={'/menuId/'+menuItem?.id} className={ clasz } onClick={() => setSelectedMenuItem(menuItem)}> {menuItem?.name} </Link>
            </li>
   );
};

export default MenuItem;