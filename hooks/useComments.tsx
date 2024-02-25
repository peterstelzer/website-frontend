'use client'

import {useEffect, useState} from "react";
import {CommentType} from "./useMenuItems";
import {LoadingState} from "@/app/models/models";
import * as commentsAPI from "./../api/comments/comments"

export type CommentDetailsType = {
    comments: CommentType[];
}

const useComments = (selectedMenuItemId : number) => {
    const [comments, setComments] = useState<CommentType[]>([]);
    const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.Loading)

    useEffect(() => {
            const fetchComments = async () => {
                setLoadingState(LoadingState.Loading);
                try {
                    commentsAPI.getComments(selectedMenuItemId)
                        .then((response) => response?.comments && setComments(response.comments));
                    setLoadingState(LoadingState.Loaded);
                } catch {
                    setLoadingState(LoadingState.Error)
                }
            }
            fetchComments();
        }, []);
    const postComment = async (comment: CommentType) => {
        await commentsAPI.saveComments(comment);
    };

    const addComment = (comment: CommentType) => {
        postComment(comment);
    };

    return {comments, setComments, loadingState, addComment};
}

export default useComments;