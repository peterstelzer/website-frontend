import MenuItem from "./menuItem";
import {useGlobalContext} from "@/app/context/store";
import {LoadingState} from "@/app/models/models";
import Spinner from "./Spinner";


const MenuBar = () => {
    const { menuItems , loadingState} = useGlobalContext();

    if (loadingState !== LoadingState.Loaded) {
        return <nav><Spinner/></nav>;
    }

    return (
       <nav>
          <ul>
             {menuItems?.map(menu => (
                <MenuItem key={menu.id} menuItem={menu}/>
             ))}
          </ul>
       </nav>);
};

export default MenuBar;