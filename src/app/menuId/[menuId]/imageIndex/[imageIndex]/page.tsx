'use client'

import {useGlobalContext} from "@/app/context/store";
import ImageSlideshow from "../../../../../../components/imageSlideshow";
import MenuBar from "../../../../../../components/menuBar";
import {useSearchParams} from "next/navigation";

export default function Page({ params }: Readonly<{ params: { menuId: string, imageIndex: string } }>) {
    const {selectedMenuItem, setVersion} = useGlobalContext();
    const searchParams = useSearchParams();
    const versionId = searchParams?.get('versionId') ? Number(searchParams.get('versionId')) : 0;
    setVersion(versionId);

    return (
        <div className="container">
            <MenuBar key={selectedMenuItem?.current?.id} />
            <ImageSlideshow currentMenuId={Number(params.menuId)} currentImageIndex={Number(params.imageIndex)}  />
        </div>
);
}
