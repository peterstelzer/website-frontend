'use server'

import {CommentDetailsType} from "../../hooks/useComments";
import {CommentType} from "../../hooks/useMenuItems";

export async function getComments(selectedMenuItemId: number): Promise<CommentDetailsType> {
    const configUrl = process.env.NEXT_PUBLIC_CONFIG_URL ? process.env.NEXT_PUBLIC_CONFIG_URL : "http://localhost:8000";
    const apiKey = process.env.NEXT_PUBLIC_BASIC_AUTH_CREDS ? process.env.NEXT_PUBLIC_BASIC_AUTH_CREDS : "N/A";
    const url = configUrl + "/api/comments?menuItemId=" + selectedMenuItemId;
    const response:void | Response = await fetch(url,  {
        headers: {
            "Authorization": "Basic " + apiKey
        }
    });
    const commentsCollection = await response.json();
    return commentsCollection.comments;
}

export async function saveComments(comment: CommentType): Promise<void> {
    const configUrl = process.env.NEXT_PUBLIC_CONFIG_URL ? process.env.NEXT_PUBLIC_CONFIG_URL : "http://localhost:8000";
    const apiKey = process.env.NEXT_PUBLIC_BASIC_AUTH_CREDS ? process.env.NEXT_PUBLIC_BASIC_AUTH_CREDS : "N/A";
    const url = configUrl + `/api/comments`;

    await fetch(url, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Authorization": "Basic " + apiKey
        },
        body: JSON.stringify(comment),
    });
}


