import { Dispatch, SetStateAction } from "react";

export interface ImageSlideshowProps {
    currentImageId: number | undefined;
    imagesCount: number | undefined;
    currentImageIndex: number | undefined;
    imageDescription: string;
    setCurrentImageIndex: Dispatch<SetStateAction<any>>;
}

const ImageSlideshow  = ({ currentImageId, imagesCount, setCurrentImageIndex, currentImageIndex, imageDescription}: ImageSlideshowProps) => {

    const currentImageIndexNotUndefined = currentImageIndex || 0;
    const imagesCountNotUndefined = imagesCount || 0;
    const previousImageIndex = currentImageIndexNotUndefined <= 0 ? imagesCountNotUndefined - 1 : currentImageIndexNotUndefined - 1;
    const nextImageIndex = currentImageIndexNotUndefined + 1 >= imagesCountNotUndefined ? 0 : currentImageIndexNotUndefined + 1
    const configUrl = process.env.NEXT_PUBLIC_CONFIG_URL ? process.env.NEXT_PUBLIC_CONFIG_URL : "http://localhost:8000";

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
                <img src={configUrl + "/showImageById.mvc?imageId=" + currentImageId + "&isThumbnail=n"}/>
             </div>
             <div className="image-description">{imageDescription}</div>
             </div>
        </section>
    );
};

export default ImageSlideshow;