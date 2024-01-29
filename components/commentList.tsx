import {CommentType} from "../hooks/useMenuItems";

export interface CommentListProps {
    comments: CommentType[];
}

const CommentList = ({comments}:CommentListProps ) => {
    return (
        <>
        { comments.map((c) =>
            ( <div key={c.id}  className='user-comment-box'><div className='comment_user_name'>{c.commenterName}  wrote:</div><div className='comment_content'> {c.comment}</div></div>))
        }
        </>
    )
}

export default CommentList;