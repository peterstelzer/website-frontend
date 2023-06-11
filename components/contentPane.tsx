import { Dispatch, SetStateAction, CSSProperties } from "react";
import {MenuItemType, LoadingState } from './app';
import PictureElement from './pictureElement';
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
  const description: string = currentImage ? currentImage.description : "";
  if (loadingState != LoadingState.Loaded){
    return <ClockLoader color="#36d7b7" cssOverride={cssOverride}/>
  }
    
  return (
    <>
      <main className="main_view ">

        { presentationStyle == PresentationStyle.ImageSlideshow ? 
        <ImageSlideshow selectedMenuItemId={selectedMenuItem && selectedMenuItem.id} imagesCount={selectedMenuItem && selectedMenuItem.numberOfImages} setCurrentImageIndex={setCurrentImageIndex} currentImageIndex={currentImageIndex} imageDescription={description}/>
        : 
        <>
        <section>
          <div dangerouslySetInnerHTML={{__html: ((content && content.content) || '')}}>
          </div>
        </section>       
        <section className="pictureGrid">
          {content && content.images && content.images.map(image => (
            <PictureElement key={image.imageId} image={image} selectedMenuItem={selectedMenuItem} setPresentationStyle={setPresentationStyle} setCurrentImageIndex={setCurrentImageIndex}/>
          ))}
        </section>
        </>
      }
      </main>
    </>
    );
}

export default ContentPane;