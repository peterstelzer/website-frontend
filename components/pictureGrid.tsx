import PictureElement from "./pictureElement";
import {Dispatch, SetStateAction} from "react";
import {ImagePaneDetailsType} from "../hooks/useMenuItemContent";
import CommentBox from "./commentBox";

export interface PictureGridProps {
    content: ImagePaneDetailsType | undefined;
    selectedMenuItemId: number | undefined;
    setCurrentImageIndex: Dispatch<SetStateAction<any>>;
    setPresentationStyle: Dispatch<SetStateAction<any>>;
}
const PictureGrid = ({content, selectedMenuItemId, setPresentationStyle, setCurrentImageIndex}:PictureGridProps) => {
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
                {(content && content.commentsAllowed) ?
                    <CommentBox selectedMenuItemId={selectedMenuItemId ? selectedMenuItemId : 0} />: ""
                }
        </>

        )
}
export default PictureGrid;