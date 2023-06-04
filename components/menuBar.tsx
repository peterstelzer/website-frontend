import MenuItem from "./menuItem";
import { MenuItemProps } from './app';

const MenuBar = ({ setSelectedMenuItem, selectedMenuItem, menuItems, setPresentationStyle }: MenuItemProps) => {

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