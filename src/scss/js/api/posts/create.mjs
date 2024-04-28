import { API_URL, API_POSTS } from "../constants.mjs"
import { authFetch } from "../";

const method = "post";

export async function createPost(postData) {
    const createUrl = `${API_URL}${API_POSTS}`;
    const response = await authFetch( createUrl, {
        method,
        body: JSON.stringify(postData)
    });
    return await response.json();
}   