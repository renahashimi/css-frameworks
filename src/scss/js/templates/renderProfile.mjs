import { getProfile } from "../api/profile/get.mjs";
import { profilePostCard, profileTemplate } from "./profileTemplate.mjs";


export async function renderProfile() {
    try {
        const profileData = await getProfile();
        const container = document.querySelector("#profile");

        const profileContainer = profileTemplate(profileData);
        container.innerHTML = "";
        //console.log(profileInfo);
        container.append(profileContainer);
      
        //POSTS BY PROFILE
        const postsContainer = document.querySelector("#profilePosts");
        const myPosts = profileData.posts;
        postsContainer.innerHTML = "";

        myPosts.forEach(postData => {
        const postCardElement = profilePostCard(postData);
        postsContainer.append(postCardElement);
        });     
        
       // } else {
       //     console.log("Profile is not found.")
       // }
    } catch (error) {
        console.error("Failed to load profile:", error)
    }
}
  