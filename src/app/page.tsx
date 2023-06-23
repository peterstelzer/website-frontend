'use client'
import ContentPane from "../../components/contentPane";
import MenuBar from "../../components/menuBar";
import useMenuItems from "../../hooks/useMenuItems";

export default function Page() {
    const {menuItems, selectedMenuItem, setSelectedMenuItem, presentationStyle, setPresentationStyle} = useMenuItems();

    <>
        <div className="container">
            <MenuBar key={selectedMenuItem && selectedMenuItem.id} menuItem={selectedMenuItem} setSelectedMenuItem={setSelectedMenuItem} selectedMenuItem={selectedMenuItem} menuItems={menuItems} setPresentationStyle={setPresentationStyle}/>
            <ContentPane selectedMenuItem={selectedMenuItem} presentationStyle={presentationStyle} setPresentationStyle={setPresentationStyle}/>
        </div>
    </>
}