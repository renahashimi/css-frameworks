import { API_URL, API_POSTS } from "../constants.mjs"
import { authFetch } from "../authFetch.mjs";

const method = "delete";

export async function removePost(id) {

    if (!id) {
        throw new Error("You have to have a postID to delete posts");
    } 
    const removePostUrl = `${API_URL}${API_POSTS}/${id}`;
    const response = await authFetch( removePostUrl, {
        method,
    });
    return await response.json();
}   
