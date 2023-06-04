import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {MenuItemType } from './app';
import PictureElement from './pictureElement';
import ImageSlideshow from './imageSlideshow'
import { PresentationStyle } from './app'
import useMenuItemContent from "hooks/useMenuItemContent";

export type ImagePaneDetailsType = {
  content: string;
  images: ImageDetails[];
}  

export type ImageDetails = {
  imageId: number;
  imageCaption: string;
  imageIndex: number;
  description: string;
}

export interface ContentProps {
   selectedMenuItem: MenuItemType | undefined;
   presentationStyle: PresentationStyle | undefined;
   setPresentationStyle: Dispatch<SetStateAction<any>>;
   
}


const ContentPane = ({ selectedMenuItem, presentationStyle, setPresentationStyle }: ContentProps) =>  {
  const {content, setContent, currentImageIndex, setCurrentImageIndex } = useMenuItemContent(selectedMenuItem);

  const currentImageIndexDefined = currentImageIndex ? currentImageIndex : 0;
  const currentImageArray = content?.images;
  const currentImage = currentImageArray && currentImageArray[currentImageIndexDefined];
  const description: string = currentImage ? currentImage.description : "";

    return (
    <>
      <main className="main_view ">

        { presentationStyle == PresentationStyle.ImageSlideshow ? 
        <ImageSlideshow selectedMenuItemId={selectedMenuItem && selectedMenuItem.id} imagesCount={selectedMenuItem && selectedMenuItem.numberOfImages} setCurrentImageIndex={setCurrentImageIndex} currentImageIndex={currentImageIndex} setPresentationStyle={setPresentationStyle} imageDescription={description}/> 
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