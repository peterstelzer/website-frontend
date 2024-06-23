import Link from "next/link";
import {useGlobalContext} from "@/app/context/store";
import useMenuItemContent from "../hooks/useMenuItemContent";
import retrieveMenuItem from "@/app/util/functions";
import {LoadingState} from "@/app/models/models";
import Spinner from "./Spinner";

type ImageSlideshowProps = {
    currentMenuId: number | undefined;
    currentImageIndex: number | undefined;
}

const ImageSlideshow  = ({ currentMenuId, currentImageIndex}: ImageSlideshowProps) => {

    const { menuItems } = useGlobalContext();
    function matchesImageIndex (element: { imageIndex: number; }){
        return Number(currentImageIndex)==element.imageIndex;
    }
    const currentMenuItem= retrieveMenuItem(menuItems, currentMenuId ?? 1);
    const {content, loadingState } = useMenuItemContent(currentMenuItem);
    const currentImage = content?.images.filter(matchesImageIndex)[0];


    const currentImageIndexNotUndefined = currentImageIndex ?? 0;
    const imagesCount = content?.images.length ?? 0;
    const previousImageIndex = currentImageIndexNotUndefined <= 0 ? imagesCount - 1 : currentImageIndexNotUndefined - 1;
    const nextImageIndex = currentImageIndexNotUndefined + 1 >= imagesCount ? 0 : currentImageIndexNotUndefined + 1
    const configUrl = process.env.NEXT_PUBLIC_CONFIG_URL ? process.env.NEXT_PUBLIC_CONFIG_URL : "http://localhost:8000";

    if (loadingState !== LoadingState.Loaded) {
        return <nav><Spinner/></nav>;
    }
    return (
        <main>
            <section>
               <div className="containerVertical">
                  <div className="imagePageNavigation">
                     <div>
                        <Link href={'/menuId/'+currentMenuId+"/imageIndex/"+previousImageIndex} >
                           <i className="fas fa-arrow-circle-left" aria-hidden="true"></i>{' '}
                           Previous
                        </Link>
                    </div>
                    <div>Image <span>{(currentImageIndex ?? 0) + 1}</span> of <span>{imagesCount}</span> </div>
                    <div>
                        <Link href={'/menuId/'+currentMenuId+"/imageIndex/"+nextImageIndex} >
                          Next <i className="fas fa-arrow-circle-right" aria-hidden="true"></i>
                       </Link>
                    </div>
                 </div>
                   {currentImage?.imageId &&
                    <div className="image-display">
                    <img src={configUrl + "/showImageById?imageId=" + currentImage?.imageId + "&isThumbnail=n"} alt={currentImage.imageCaption}/>
                 </div>}
                 <div className="image-description">{currentImage?.description}</div>
                 </div>
            </section>
        </main>
    );
};

export default ImageSlideshow;