import useComments from '../hooks/useComments'
import CommentList from "./commentList";

import AddComment from "./addComment";

type CommentProps = {
    selectedMenuItemId: number;
}

const CommentBox = ({selectedMenuItemId}:CommentProps ) => {

    const {comments} = useComments(selectedMenuItemId || 0);

    return (
        <section>
            <div className="comment_box">
                <AddComment selectedMenuItemId={selectedMenuItemId || 0}/>
            </div>
            <div className="comment_header">Recent Comments</div>
            <div id="user-comments" className="user_comments">
                { comments.length == 0 ?
                    (<p className="user-comment">No comments entered yet!</p>)
                    :
                   <CommentList comments={comments}/>
                }
            </div>
        </section>
    )
}

export default CommentBox;