import { Dispatch, SetStateAction } from "react";
import { ImageDetails } from 'hooks/useMenuItemContent';
import {PresentationStyle} from "./app";


export interface PictureElementProps {
    image: ImageDetails;
    setPresentationStyle: Dispatch<SetStateAction<any>>;
    setCurrentImageIndex: Dispatch<SetStateAction<any>>;
}


const PictureElement  = ({ image, setPresentationStyle, setCurrentImageIndex }: PictureElementProps) => {
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
                <img src={configUrl + "/showImageById.mvc?imageId=" + (image && image.imageId) + "&isThumbnail=y"} alt=""/>
              </a>
              <div>{image.imageCaption}</div>
         </div>         
   );
};

export default PictureElement;