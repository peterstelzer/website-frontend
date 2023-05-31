import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {MenuItemType } from './app';
import PictureElement from './pictureElement';
import {ImagePaneDetailsType} from './pictureElement'
import ImageSlideshow from './imageSlideshow'
import { PresentationStyle } from './app'

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
  const [content, setContent] = useState<ImagePaneDetailsType | undefined>(undefined);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>();

  useEffect(() => {
    const fetchContent = async () => {
        const response:void | Response = await fetch("http://localhost:8080/api/menuItemContent?menuItemId="+selectedMenuItem?.id);
        const content = await response.json();  
        setContent(content);
    }
    if (selectedMenuItem && selectedMenuItem.id){ 
      fetchContent();
    }
  }, [selectedMenuItem])

    return (
    <>
      <main className="main_view ">

        { presentationStyle == PresentationStyle.ImageSlideshow ? 
        <ImageSlideshow selectedMenuItemId={selectedMenuItem && selectedMenuItem.id} imagesCount={selectedMenuItem && selectedMenuItem.numberOfImages} setCurrentImageIndex={setCurrentImageIndex} currentImageIndex={currentImageIndex} setPresentationStyle={setPresentationStyle}/> 
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