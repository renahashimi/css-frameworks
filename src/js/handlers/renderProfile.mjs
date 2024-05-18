import { getProfile } from "../api/profile/get.mjs";
import * as templates from "../templates/index.mjs";

export async function renderProfile() {
    try {
        const profileData = await getProfile();
        const container = document.querySelector("#profile");

        const profileContainer = templates.profileTemplate(profileData);
        container.innerHTML = "";
        //console.log(profileInfo);
        container.append(profileContainer);
      
        //POSTS BY PROFILE
        const postsContainer = document.querySelector("#profilePosts");
        const myPosts = profileData.posts;
        postsContainer.innerHTML = "";

        myPosts.forEach(postData => {
        const postCardElement = templates.profilePostCard(postData);
        postsContainer.append(postCardElement);
        });   
    } catch (error) {
        console.error("Failed to load profile:", error)
    }
}
  