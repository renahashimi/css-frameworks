import { authFetch } from "../authFetch.mjs";
import { API_POSTS, API_SOCIAL_URL } from "../constants.mjs";


const method = "DELETE";

export async function removeComments(commentId, postId) {
    if (!commentId) {
        throw new Error("Deleting comment failed");
    }
    const reemoveCommentUrl = `${API_SOCIAL_URL}${API_POSTS}/${postId}/comment/${commentId}`;
    const response = await authFetch(reemoveCommentUrl, {
        method,
    });

 return;
}