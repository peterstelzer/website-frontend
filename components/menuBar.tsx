import MenuItem from "./menuItem";
import {useGlobalContext} from "@/app/context/store";


const MenuBar = () => {
    const { menuItems } = useGlobalContext();
    return (
    <>
       <nav>   
          <ul>
             {menuItems?.map(menu => (
                <MenuItem key={menu.id} menuItem={menu}/>
             ))}
      
          </ul>
       </nav>
    </>);
};

export default MenuBar;