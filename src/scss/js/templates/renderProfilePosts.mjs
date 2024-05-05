import { postCard, renderPostList } from "./postTemplate.mjs";
import * as postActions from "../api/posts/index.mjs";

const profileData = JSON.parse(localStorage.getItem("profile"));

//RENDER MY PROFILE-POSTS
export async function renderProfilePosts(profileData) {

    try{
    const posts = await postActions.getPosts();
    
    const postsByProfile = posts.filter(post => post.author === profileData.name);
console.log(posts, postsByProfile, profileData)
    const container = document.querySelector("#profilePosts");
    container.innerHTML = "";
    renderPostList(postsByProfile, container)
    } catch (error) {
        console.error("Failed to fetch your posts", error);

    }
        // postsByProfile.forEach(post => {
        //     const postElement = document.createElement("div");
        //     postElement.classList.add("post");
        //     const postContent = document.createElement("p");
        //     postContent.textContent = "post.content";

        // console.log(postElement, postContent, postsData)

        //     postElement.appendChild(postContent);
        //     profilePostContainer.append(postElement)
        // });
}

// export function renderPostByProfileList(postDataList, parent) {
//     postDataList.forEach(postData => {

//     const postElement = postCard(postData);
//     parent.appendChild(postElement);
//     });

// }

// export function renderPostByProfileList(postDataList, parent) {
//     parent.append(...postDataList.map(postCard));
// };

