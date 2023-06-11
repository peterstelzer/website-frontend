import PictureElement from "./pictureElement";
import {Dispatch, SetStateAction} from "react";
import {ImagePaneDetailsType} from "../hooks/useMenuItemContent";

export interface PictureGridProps {
    content: ImagePaneDetailsType | undefined;
    setCurrentImageIndex: Dispatch<SetStateAction<any>>;
    setPresentationStyle: Dispatch<SetStateAction<any>>;
}
const PictureGrid = ({content, setPresentationStyle, setCurrentImageIndex}:PictureGridProps) => {
        return (
            <>
                <section>
                    <div dangerouslySetInnerHTML={{__html: ((content && content.content) || '')}}>
                    </div>
                </section>
                <section className="pictureGrid">
                    {content && content.images && content.images.map(image => (
                        <PictureElement key={image.imageId} image={image}  setPresentationStyle={setPresentationStyle} setCurrentImageIndex={setCurrentImageIndex}/>
                    ))}
                </section>
            </>

        )
}
export default PictureGrid;