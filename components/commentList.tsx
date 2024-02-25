import {CommentType} from "../hooks/useMenuItems";

type CommentListProps = {
    comments: CommentType[];
}

const CommentList = ({comments}:CommentListProps ) => {
    return (
        <>
            {comments && comments.length > 0 ?
                comments.map((c) =>
                    (<div key={c.id} className='user-comment-box'>
                        <div className='comment_user_name'>{c.commenterName} wrote:</div>
                        <div className='comment_content'> {c.comment}</div>
                    </div>))
                :
                <p className="user-comment">No comments entered yet!</p>
        }
        </>
    )
}

export default CommentList;