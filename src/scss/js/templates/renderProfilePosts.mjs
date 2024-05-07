import { postCard, renderPostList } from "./postTemplate.mjs";
import { getProfile } from "../api/profile/get.mjs";
import { getPosts } from "../api/posts/index.mjs";
import * as postActions from "../api/posts/index.mjs";

//const profileData = JSON.parse(localStorage.getItem("profile"));

//RENDER MY PROFILE-POSTS
export async function renderProfilePosts() {
    try{
        const profileData = await getProfile();
        const profileName = profileData.name;
        console.log(profileName)


        const response = await postActions.getPosts();
        const allPosts = await response.json();
        const container = document.querySelector("#profilePosts");

        console.log(response.status, getPosts, allPosts)
        if (allPosts) {
            const postByProfile = allPosts.filter(post => post.author === profileName);
            //renderPostList(postByProfile, container);
            console.log(postByProfile)
        } else {
            console.log("Profile name not found")
        }

        console.log(profileName)

    } catch (error) {
        console.error("Failed to fetch posts", error)
    }
}
        // postsByProfile.forEach(post => {
        //     const postElement = document.createElement("div");
        //     postElement.classList.add("post");
        //     const postContent = document.createElement("p");
        //     postContent.textContent = "post.content";

        // console.log(postElement, postContent, postsData)

        //     postElement.appendChild(postContent);
        // });
    

// export function renderPostByProfileList(postDataList, parent) {
//     postDataList.forEach(postData => {

//     const postElement = postCard(postData);
//     parent.appendChild(postElement);
//     });

// }

// export function renderPostByProfileList(postDataList, parent) {
//     parent.append(...postDataList.map(postCard));
// };

