import { API_URL, API_POSTS } from "../constants.mjs"
import { authFetch } from "../authFetch.mjs";

const method = "POST";

export async function createPost(postData) {
    const createUrl = API_URL + API_POSTS;
    const response = await authFetch( createUrl, {
        method,
        body: JSON.stringify(postData)
    });
    if (!response.ok) {
        throw new Error("An error acquired!");
    }
    return await response.json();
}   