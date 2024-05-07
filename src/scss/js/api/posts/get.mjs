import { authFetch } from "../authFetch.mjs";
import { API_POSTS, API_SOCIAL_URL } from "../constants.mjs";

// const method = "get";
const author = "?_author=true";

export async function getPosts() {
    const getPostsUrl = `${API_SOCIAL_URL}${API_POSTS}${author}`;
    const response = await authFetch(getPostsUrl);
    return await response.json();
}

export async function getPost(id) {
    // const url = new URL(location.href);
    // const id = url.searchParams.get("id");
    if (!id) {
        throw new Error("You have to have a postID to get posts");
    } 
    const getPostUrl = `${API_SOCIAL_URL}${API_POSTS}/${id}`;
    const response = await authFetch(getPostUrl);
    return await response.json(); 
}
