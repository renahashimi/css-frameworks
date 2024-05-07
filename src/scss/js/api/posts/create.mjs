import { API_POSTS, API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const method = "post";
//const action = "/posts";

export async function createPost(postData) {
    const createUrl = `${API_SOCIAL_URL}${API_POSTS}`;
    console.log(createUrl)
    const response = await authFetch(createUrl, {
        method,
        body: JSON.stringify(postData)
    })
    localStorage.setItem("posts", myPost)
    window.location.href = "/profile/";
    return await response.json();
}  