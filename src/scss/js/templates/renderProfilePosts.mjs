import { postCard, renderPostList } from "./postTemplate.mjs";
import * as postActions from "../api/posts/index.mjs";
import { getProfile } from "../api/profile/get.mjs";

//const profileData = JSON.parse(localStorage.getItem("profile"));

//RENDER MY PROFILE-POSTS
export async function renderProfilePosts() {
    const profileData = await getProfile();
    const profileName = profileData.name;
    console.log(profileName, profileData)


    const response = await postActions.getPosts();
    const allPosts = await response.json;
    //const container = document.querySelector("#profilePosts");


    if (profileName) {
        return allPosts.filter(post => post.author === profileName);
    } 
    console.log(allPosts, profileName)

    renderPostList(allPosts, container);

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

