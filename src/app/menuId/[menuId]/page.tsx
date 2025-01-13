'use client'

import MenuBar from "../../../../components/menuBar";
import {useGlobalContext} from "@/app/context/store";
import useMenuItemContent from "../../../../hooks/useMenuItemContent";
import PictureGrid from "../../../../components/pictureGrid";
import retrieveMenuItem from "@/app/util/functions";
import {useRouter, useSearchParams} from "next/navigation";
import Spinner from "../../../../components/Spinner";
import {useEffect} from "react";


export default function Page({ params }: Readonly<{ params: { menuId: string } }>) {

    const router = useRouter()
    const searchParams = useSearchParams()
    const versionId = searchParams?.get('versionId') ? Number(searchParams.get('versionId')) : 0;

    const currentMenuItemId = params.menuId ? params.menuId : 1;
    const { menuItems, setVersion } = useGlobalContext();

    const selectedMenuItem = retrieveMenuItem(menuItems, Number(currentMenuItemId));
    const {content, loadingState} = useMenuItemContent(selectedMenuItem, versionId) || "";

    useEffect(() => {
        const versionId = searchParams?.get('versionId') ? Number(searchParams.get('versionId')) : 0;
        setVersion(versionId);
    }, [versionId])

    if (menuItems.length == 0){
        return <Spinner/>
    }
    if (Number(currentMenuItemId) == 0 || selectedMenuItem === undefined){
        // if we are at a currentMenuItemId of 0 (if we just arrived here from the main domain name) or if we changed versions and we have a new home page id (and the current menu id is invalid now),
        // then find the menu item without a parent that is at placement index 0 - that is our home page that we want to redirect to
        const firstMenuItemId : number | undefined = menuItems.filter(mi => !mi.hasParent && mi.index == 0).at(0)?.id
        router.push("/menuId/" + firstMenuItemId + "?versionId=" + versionId);
    }
    return (
            <div className="container">
                <MenuBar key={params.menuId} />
                <PictureGrid content={content} loadingState={loadingState}/>
            </div>
    );
};