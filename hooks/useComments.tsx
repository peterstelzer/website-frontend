import { useEffect, useState } from "react";
import {LoadingState} from "../components/app";
import {CommentType} from "./useMenuItems";

const useComments = (selectedMenuItemId : number) => {
    const [comments, setComments] = useState<CommentType[]>([]);
    const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.Loading)
    const configUrl = process.env.NEXT_PUBLIC_CONFIG_URL ? process.env.NEXT_PUBLIC_CONFIG_URL : "http://localhost:8000";

    useEffect(() => {
            const fetchComments = async () => {
                setLoadingState(LoadingState.Loading);
                try {
                    const url = configUrl + "/api/comments?menuItemId=" + selectedMenuItemId;
                    const response: void | Response = await fetch(url)
                    const comments = await response.json();
                    setComments(comments.comments);
                    setLoadingState(LoadingState.Loaded);
                } catch {
                    setLoadingState(LoadingState.Error)
                }
            }
            fetchComments();
        }, []);
    const postComment = async (comment: CommentType) => {
        await fetch(configUrl + `/api/comments/`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(comment),
        });
    };

    const addComment = (comment: CommentType) => {
        postComment(comment);

        setComments([...comments, comment]);
    };


    return {comments, setComments, loadingState, addComment};
}

export default useComments;