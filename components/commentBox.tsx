import useComments from '../hooks/useComments'

export interface CommentProps {
    selectedMenuItemId: number;
}

const CommentBox = ({selectedMenuItemId}:CommentProps ) => {
    const {comments, setComments, loadingState} = useComments(selectedMenuItemId ? selectedMenuItemId : 0);

    return (
        <section>
            <div className="comment_box">
                Add a Comment
                <div>
                    <textarea id="commenterName" className="add_comment_commenter_name" placeholder="Enter your name" maxLength={50}></textarea>
                </div>
                <div>
                    <textarea id="comment" className="add_comment_textarea" placeholder="Add your thoughts..." maxLength={400}></textarea>
                </div>
                <div className="comment_box_bottom_row">
                    <button id="comment_button" className="comment_button" >Add Comment</button>
                </div>
            </div>
            <div className="comment_header">Recent Comments</div>
            <div id="user-comments" className="user_comments">
                <p className="user-comment">No comments entered yet!</p>
            </div>
        </section>
    )
}

export default CommentBox;