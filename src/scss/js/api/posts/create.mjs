import { API_POSTS, API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import { load } from "../../storage/index.mjs";

const method = "post";
//const action = "/posts";
export async function createPost(postData) {
    const createUrl = `${API_SOCIAL_URL}${API_POSTS}`;
    try {
        const userName = load("profile").name;
        const postDataWithAuthor = { ...postData, author: userName };
        console.log(postDataWithAuthor)
        const response = await authFetch(createUrl, {
            method,
            body: JSON.stringify(postDataWithAuthor)
        })
        if (response.ok) {
            const myPost = await response.json();
            let posts =JSON.parse(localStorage.getItem("posts")) || [];
            posts.push(myPost)
            localStorage.setItem("posts", JSON.stringify(posts));
            window.location.href = "/profile/";

            return await myPost;     
        } else {
            throw new Error ("Failes to create post");                          
        }
        
      
    } catch (error) {
        console.error("Failed to create post")
        throw error;
    }
} 