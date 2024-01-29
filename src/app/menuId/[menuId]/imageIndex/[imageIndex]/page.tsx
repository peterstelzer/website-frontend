'use client'

import {useGlobalContext} from "@/app/context/store";
import ImageSlideshow from "../../../../../../components/imageSlideshow";
import MenuBar from "../../../../../../components/menuBar";

export default function Page({ params }: { params: { menuId: string, imageIndex: string } }) {
    const {selectedMenuItem} = useGlobalContext();
    return (
        <div className="container">
            <MenuBar key={selectedMenuItem?.current?.id} />
            <ImageSlideshow currentMenuId={Number(params.menuId)} currentImageIndex={Number(params.imageIndex)}  />
        </div>
);
}
