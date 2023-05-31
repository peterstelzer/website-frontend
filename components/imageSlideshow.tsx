import { ImageDetails } from './contentPane';
import {MenuItemType, PresentationStyle } from './app';
import { Dispatch, SetStateAction } from "react";

export interface ImageSlideshowProps {
    selectedMenuItemId: number | undefined;
    imagesCount: number | undefined;
    currentImageIndex: number | undefined;
    setPresentationStyle: Dispatch<SetStateAction<any>>;
    setCurrentImageIndex: Dispatch<SetStateAction<any>>; 
}

const ImageSlideshow  = ({ selectedMenuItemId, imagesCount, setPresentationStyle, setCurrentImageIndex, currentImageIndex}: ImageSlideshowProps) => {
    const setImageSlideshow = () => { 
        if (setPresentationStyle) 
        {
            setPresentationStyle(PresentationStyle.ImageSlideshow);
        }; 
        return false; 
    }
    const currentImageIndexNotUndefined = currentImageIndex || 0;
    const imagesCountNotUndefined = imagesCount || 0;
    const previousImageIndex = currentImageIndexNotUndefined <= 0 ? imagesCountNotUndefined - 1 : currentImageIndexNotUndefined - 1;
    const nextImageIndex = currentImageIndexNotUndefined + 1 >= imagesCountNotUndefined ? 0 : currentImageIndexNotUndefined + 1

    const onClickNextImage = () => { 
        setCurrentImageIndex(nextImageIndex)
        return false; 
    }

    const onClickPreviousImage = () => { 
        setCurrentImageIndex(previousImageIndex)
        return false; 
    }
    
    return (
        <section>
           <div className="containerVertical">
              <div className="imagePageNavigation">
                 <div>
                    <a onClick={onClickPreviousImage}>
                       <i className="fas fa-arrow-circle-left" aria-hidden="true"></i> 
                       Previous
                    </a>
                </div>
                <div>Image <span>{(currentImageIndex || 0) + 1}</span> of <span>{imagesCount}</span> </div>
                <div>
                   <a onClick={onClickNextImage}>
                      Next <i className="fas fa-arrow-circle-right" aria-hidden="true"></i>
                   </a>
                </div>
             </div>
             <div className="image-display">
                <img src={"http://dev-website.bipper.net/showImage.mvc?menuItemId=" + selectedMenuItemId + "&amp;imageIndex=" + currentImageIndex + "&amp;isThumbnail=n"}/>
             </div>
             <div className="image-description">Hi there</div>
             </div>
        </section>
    );
};

export default ImageSlideshow;