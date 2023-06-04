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
        }; 
        setCurrentImageIndex(image && image.imageIndex);
        return false; 
    }
    
    return (
           <div className="pictureElement">
              <a onClick={setImageSlideshowAndCurrentImageIndex}>
                <img src={"http://dev-website.bipper.net/showImage.mvc?menuItemId=" + (selectedMenuItem && selectedMenuItem.id) + "&amp;imageIndex=" + (image && image.imageIndex) + "&amp;isThumbnail=y"} alt=""/>
              </a>
              <div>{image.imageCaption}</div>
         </div>         
   );
};

export default PictureElement;