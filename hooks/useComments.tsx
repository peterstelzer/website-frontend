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
                    setComments(comments);
                    setLoadingState(LoadingState.Loaded);
                } catch {
                    setLoadingState(LoadingState.Error)
                }
            }
            fetchComments();
        }, []);
    return {comments, setComments, loadingState};
}

export default useComments;