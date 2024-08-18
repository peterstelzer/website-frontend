'use client'

import MenuBar from "../../../../components/menuBar";
import {useGlobalContext} from "@/app/context/store";
import useMenuItemContent from "../../../../hooks/useMenuItemContent";
import PictureGrid from "../../../../components/pictureGrid";
import retrieveMenuItem from "@/app/util/functions";
import {useSearchParams} from "next/navigation";
import Spinner from "../../../../components/Spinner";


export default function Page({ params }: Readonly<{ params: { menuId: string } }>) {

    const searchParams = useSearchParams()
    const versionId = searchParams?.get('versionId') ? Number(searchParams.get('versionId')) : 0;

    const currentMenuItemId = params.menuId ? params.menuId : 1;
    const { menuItems, setVersion } = useGlobalContext();

    setVersion(versionId)

    const selectedMenuItem = retrieveMenuItem(menuItems, Number(currentMenuItemId));
    const {content, loadingState} = useMenuItemContent(selectedMenuItem, versionId) || "";


    if (menuItems.length == 0){
        return <Spinner/>
    }
    return (
            <div className="container">
                <MenuBar key={params.menuId} />
                <PictureGrid content={content} loadingState={loadingState}/>
            </div>
    );
};