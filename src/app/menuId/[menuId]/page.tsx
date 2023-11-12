'use client'

import MenuBar from "../../../../components/menuBar";
import {useGlobalContext} from "@/app/context/store";
import useMenuItemContent from "../../../../hooks/useMenuItemContent";
import PictureGrid from "../../../../components/pictureGrid";
import retrieveMenuItem from "@/app/util/functions";

export default function Page({ params }: { params: { menuId: string } }) {

    const currentMenuItemId = params.menuId ? params.menuId : 1;
    const { menuItems } = useGlobalContext();

    const selectedMenuItem = retrieveMenuItem(menuItems, Number(currentMenuItemId));
    const {content} = useMenuItemContent(selectedMenuItem) || "";

    return (
        <>
            <div className="container">
                <MenuBar key={params.menuId} />
                <PictureGrid content={content}/>
            </div>
        </>
    );
};