import { API_SOCIAL_URL, API_POSTS } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const method = "put";
//const action = "/posts";

export async function updatePost(postData) {
    if (!postData.id) {
        throw new Error("PostID is required to update posts");
    } 
    const updatePostUrl = `${API_SOCIAL_URL}${API_POSTS}/${postData.id}`;
    //console.log(updatePostUrl);
    const response = await authFetch(updatePostUrl, {
        method,
        body: JSON.stringify(postData),  
    });

    return await response.json();
}

