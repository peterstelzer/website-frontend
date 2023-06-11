import {MenuItemType, PresentationStyle} from './app';
import { Dispatch, SetStateAction } from "react";
import { ImageDetails } from 'hooks/useMenuItemContent';


export interface PictureElementProps {
    image: ImageDetails;
    selectedMenuItem: MenuItemType | undefined;
    setPresentationStyle: Dispatch<SetStateAction<any>>;
    setCurrentImageIndex: Dispatch<SetStateAction<any>>;
}


const PictureElement  = ({ image, selectedMenuItem, setPresentationStyle, setCurrentImageIndex }: PictureElementProps) => {
    const setImageSlideshowAndCurrentImageIndex = () => { 
        if (setPresentationStyle) 
        {
            setPresentationStyle(PresentationStyle.ImageSlideshow);
        }
        setCurrentImageIndex(image && image.imageIndex);
        return false; 
    }
    const configUrl = process.env.NEXT_PUBLIC_CONFIG_URL ? process.env.NEXT_PUBLIC_CONFIG_URL : "http://localhost:8000";

    
    return (
           <div className="pictureElement">
              <a onClick={setImageSlideshowAndCurrentImageIndex}>
                <img src={configUrl + "/showImage.mvc?menuItemId=" + (selectedMenuItem && selectedMenuItem.id) + "&imageIndex=" + (image && image.imageIndex) + "&isThumbnail=y"} alt=""/>
              </a>
              <div>{image.imageCaption}</div>
         </div>         
   );
};

export default PictureElement;