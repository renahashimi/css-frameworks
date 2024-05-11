import { authFetch } from "../authFetch.mjs";
import { API_POSTS, API_SOCIAL_URL } from "../constants.mjs";


const method = "put";
const react = "/react"

export async function postReacts(postData, reaction) {
    const reactUrl = `${API_SOCIAL_URL}${API_POSTS}${postData.id}${react}${reaction}`;
    try {
        const response = await authFetch(reactUrl, {
            method,
            //body: JSON.stringify(postData),
        });
        console.log("Reacted to a post")

        if (!response.ok) {
            throw new Error("Reaction failed");
        }

        return await response.json();
        
    } catch (error) {
        console.error("An error accured, failed at reacting to post", error)
    }
}