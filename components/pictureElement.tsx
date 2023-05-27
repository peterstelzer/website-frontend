import ImageDetails from './app';
import {MenuItemType} from './app';

export type ImageDetails = {
    imageId: number;
    imageCaption: string;
    imageIndex: number;
}
export type ImagePaneDetailsType = {
    content: string;
    images: ImageDetails[];
}  
export interface PictureElementProps {
    image: ImageDetails;
    selectedMenuItem: MenuItemType | undefined;
}


const PictureElement  = ({ image, selectedMenuItem}: PictureElementProps) => {
    return (

           <div className="pictureElement">
              <a href="/page.mvc?menuId=44&amp;imageIndex=0&amp;contentType=Image slideshow">
                <img src={"http://dev-website.bipper.net/showImage.mvc?menuItemId=" + (selectedMenuItem && selectedMenuItem.id) + "&amp;imageIndex=" + (image && image.imageIndex) + "&amp;isThumbnail=y"} alt=""/>
              </a>
              <div>{image.imageCaption}</div>
         </div>         
   );
};

export default PictureElement;