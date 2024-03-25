import PictureElement from "./pictureElement";
import {ImagePaneDetailsType} from "../hooks/useMenuItemContent";
import CommentBox from "./commentBox";
import {useGlobalContext} from "@/app/context/store";
import {LoadingState} from "@/app/models/models";
import Spinner from "./Spinner";

type PictureGridProps = {
    content: ImagePaneDetailsType | undefined;
    loadingState: LoadingState
}
const PictureGrid = ({content, loadingState}:PictureGridProps) => {
    const { selectedMenuItem } = useGlobalContext();
    if (loadingState !== LoadingState.Loaded) {
        return <Spinner/>;
    }
        return (
            <main>
                <section>
                    <div dangerouslySetInnerHTML={{__html: ((content?.content) ?? '')}}>
                    </div>
                </section>
                <section className="pictureGrid">
                    {content?.images?.map(image => (
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