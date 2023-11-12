import PictureElement from "./pictureElement";
import {ImagePaneDetailsType} from "../hooks/useMenuItemContent";
import CommentBox from "./commentBox";
import {useGlobalContext} from "@/app/context/store";

export interface PictureGridProps {
    content: ImagePaneDetailsType | undefined;
}
const PictureGrid = ({content}:PictureGridProps) => {
    const { selectedMenuItem } = useGlobalContext();
        return (
            <main>
                <section>
                    <div dangerouslySetInnerHTML={{__html: ((content?.content) ?? '')}}>
                    </div>
                </section>
                <section className="pictureGrid">
                    {content?.images && content.images.map(image => (
                        <PictureElement key={image.imageId} image={image}/>
                    ))}
                </section>
                {(content?.commentsAllowed) ?
                    <CommentBox selectedMenuItemId={selectedMenuItem?.id} />: ""
                }
        </main>

        )
}
export default PictureGrid;