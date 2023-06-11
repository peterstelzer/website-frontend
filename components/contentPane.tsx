import { Dispatch, SetStateAction, CSSProperties } from "react";
import {MenuItemType, LoadingState } from './app';
import PictureGrid from './pictureGrid';
import ImageSlideshow from './imageSlideshow'
import { PresentationStyle } from './app'
import useMenuItemContent from "hooks/useMenuItemContent";
import { ClockLoader } from "react-spinners";

export interface ContentProps {
   selectedMenuItem: MenuItemType | undefined;
   presentationStyle: PresentationStyle | undefined;
   setPresentationStyle: Dispatch<SetStateAction<any>>;
}

const cssOverride: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  top: "50%"
};

const ContentPane = ({ selectedMenuItem, presentationStyle, setPresentationStyle }: ContentProps) =>  {
  const {content, currentImageIndex, setCurrentImageIndex, loadingState } = useMenuItemContent(selectedMenuItem);

  const currentImageIndexDefined = currentImageIndex ? currentImageIndex : 0;
  const currentImageArray = content?.images;
  const currentImage = currentImageArray && currentImageArray[currentImageIndexDefined];
  const currentImageId = currentImage ? currentImage.imageId : 0;
  const description: string = currentImage ? currentImage.description : "";
  if (loadingState != LoadingState.Loaded){
    return <ClockLoader color="#36d7b7" cssOverride={cssOverride}/>
  }
    
  return (
    <>
      <main className="main_view ">
        { presentationStyle == PresentationStyle.ImageSlideshow ?
        <ImageSlideshow currentImageId={currentImageId} imagesCount={selectedMenuItem && selectedMenuItem.numberOfImages} setCurrentImageIndex={setCurrentImageIndex} currentImageIndex={currentImageIndex} imageDescription={description}/>
        : 
        <PictureGrid content={content}  setPresentationStyle={setPresentationStyle} setCurrentImageIndex={setCurrentImageIndex}/>
      }
      </main>
    </>
    );
}

export default ContentPane;