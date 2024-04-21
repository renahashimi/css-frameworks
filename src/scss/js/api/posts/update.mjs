import { API_URL, API_POSTS } from "../constants.mjs"
import { authFetch } from "../authFetch.mjs";

const method = "put";

export async function updatePost(postData) {
    if (!postData.id) {
        throw new Error("You have to have a postID to update posts");
    } 
    const updatePostUrl = `${API_URL}${API_POSTS}/${postData.id}`;
    const response = await authFetch( updatePostUrl, {
        method,
        body: JSON.stringify(postData)
    });
    return await response.json();
}   