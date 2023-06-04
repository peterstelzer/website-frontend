import { MenuItemProps } from './app';
import { PresentationStyle } from './app';



const MenuItem  = ({ menuItem, setSelectedMenuItem, selectedMenuItem, setPresentationStyle }: MenuItemProps) => {
    var clasz:string = '';
    if (selectedMenuItem && menuItem){
        clasz= selectedMenuItem && selectedMenuItem.id == menuItem.id ? 
        menuItem.hasParent ? "selectedsubnavbar" : "selectednavbar" :
        menuItem.hasParent ? "subnavbar" : "navbar"
    }

    const setSelected = () => { 
        if (menuItem && setSelectedMenuItem) 
        {
             setSelectedMenuItem(menuItem);
        }; 
        if (setPresentationStyle){
            setPresentationStyle(PresentationStyle.ThumbnailList)
        }
        return false; 
    }
    const isAChildSelected = menuItem && menuItem.children.some(item => item.id == (selectedMenuItem && selectedMenuItem.id));
    return (
        <>
            <li>
                <a className={ clasz } onClick={setSelected}>{menuItem && menuItem.name}</a>
            </li>
            { ((menuItem && menuItem.id) == (selectedMenuItem && selectedMenuItem.id)  || isAChildSelected) && 
                menuItem && menuItem.children.map(menu => 
                <MenuItem key={menu.id} menuItem={menu} setSelectedMenuItem={setSelectedMenuItem} selectedMenuItem={selectedMenuItem} setPresentationStyle={setPresentationStyle}/>)
            }
            
            </>
   );
};

export default MenuItem;