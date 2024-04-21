import { authFetch } from "../authFetch.mjs";
import { API_POSTS, API_URL } from "../constants.mjs";

// const method = "get";

export async function getPosts() {
     
    const getPostsUrl = `${API_URL}${API_POSTS}`;
    const response = await authFetch(getPostsUrl);
    return await response.json();
}

export async function getPost(id) {
    if (!id) {
        throw new Error("You have to have a postID to get posts");
    } 
    
    const getPostUrl = `${API_URL}${API_POSTS}/${id}`;
    const response = await authFetch(getPostUrl);
    return await response.json(); 
}

  
