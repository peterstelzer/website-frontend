import MenuBar from "./menuBar"
import { Dispatch, SetStateAction } from "react";
import ContentPane from './contentPane'
import useMenuItems from 'hooks/useMenuItems'


export type MenuItemType = {
    id: number;
    index: number;
    name: string;
    children: MenuItemType[];
    hasParent?: boolean;
    numberOfImages: number;
}   
export enum PresentationStyle {
    ThumbnailList,
    ImageSlideshow
}

export interface MenuItemProps {
    menuItems?: MenuItemType[];
    menuItem: MenuItemType | undefined;
    setSelectedMenuItem: Dispatch<SetStateAction<any>>;
    selectedMenuItem: MenuItemType | undefined;
    setPresentationStyle: Dispatch<SetStateAction<any>>;
}

const App = () => { 
    const {menuItems, selectedMenuItem, setSelectedMenuItem, presentationStyle, setPresentationStyle} = useMenuItems();
     return (
        <>
        <div className="container">
        <MenuBar key={selectedMenuItem && selectedMenuItem.id} menuItem={selectedMenuItem} setSelectedMenuItem={setSelectedMenuItem} selectedMenuItem={selectedMenuItem} menuItems={menuItems} setPresentationStyle={setPresentationStyle}/>
        <ContentPane selectedMenuItem={selectedMenuItem} presentationStyle={presentationStyle} setPresentationStyle={setPresentationStyle}/>
        </div>
        </>
        );
};

export default App;

