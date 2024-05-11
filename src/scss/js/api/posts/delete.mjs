import { API_SOCIAL_URL, API_POSTS } from "../constants.mjs"
import { authFetch } from "../authFetch.mjs";

const method = "delete";

export async function removePost(id) {

    if (!id) {
        throw new Error("You have to have a postID to delete posts");
    } 
    const removePostUrl = `${API_SOCIAL_URL}${API_POSTS}/${id}`;
    const response = await authFetch(removePostUrl, {
        method
    });
    return await response.json();
}   


// window.addEventListener("click", clearSearch);

// function clearSearch(){
//     searchResult.innerHTML = "";
// }

// const cleatBtn = document.querySelector(".clearbtn");
// cleatBtn.addEventListener("click", clearSearchTxt);

// function clearSearchTxt() {
//     document.getElementById("search").value = "";
// }