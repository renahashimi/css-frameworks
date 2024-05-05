import { postCard } from "./postTemplate.mjs";
import * as postActions from "../api/posts/index.mjs";


//RENDER MY PROFILE-POSTS
export async function renderProfilePosts(profileName) {
    const posts = await postActions.getPosts();
    const postsByProfile = posts.filter(post => post.author === profileName.name);

    const container = document.querySelector("#profilePosts");
    profilePostContainer.innerHTML = "";
    renderPostByProfileList(postsByProfile, container)

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

export function renderPostByProfileList(postDataList, parent) {
    parent.append(...postDataList.map(postCard));
};

