'use client'

import {SyntheticEvent, useState} from "react";
import {CommentType} from "../hooks/useMenuItems";
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import {SnackbarContent} from "@mui/material";

type CommentProps = {
    selectedMenuItemId: number;
    addComment: (comment: CommentType) => void;
}

const AddComment = ({ selectedMenuItemId, addComment}: CommentProps ) => {
    const emptyComment:CommentType = {
        menuItemId: selectedMenuItemId,
        commenterName: "",
        comment: "",
        enteredDate: "",
        id: 0
    };

    const [comment, setComment] = useState(emptyComment);
    const  [open, setOpen] = useState(false);
    const submit = () => {
        addComment(comment);
        setOpen(true);
    };
    const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
        setComment(emptyComment);
    };

    const action = (
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}>
                <CloseIcon fontSize="small" />
            </IconButton>
    );

    return (
        <>
            Add a Comment
            <div>
                <input type={"text"}  value={comment.commenterName} id="commenterName" onChange={(e) => setComment({...comment, commenterName: e.target.value})} className="add_comment_commenter_name" placeholder="Enter your name" maxLength={50}></input>
            </div>
            <div>
                <textarea id="comment" value={comment.comment} onChange={(e) => setComment({...comment, comment: e.target.value})}  className="add_comment_textarea" placeholder="Add your thoughts..." maxLength={400}/>
            </div>
            <div className="comment_box_bottom_row">
                <button id="comment_button" className="comment_button" onClick={submit}>Add Comment</button>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    action={action}>
                    <SnackbarContent
                        style={{ backgroundColor:'green',}}
                        message={<span id="client-snackbar">Your comment has been saved. Please look for your comment to be displayed shortly.</span>}
                        action={action}
                    />
                    </Snackbar>
            </div>
        </>);
}

export default AddComment;