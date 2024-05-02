import { getProfile } from "../api/profile/get.mjs";
import { profileContent } from "./profileTemplate.mjs";


export async function renderProfile(profileData) {
    try {
        // const url = new URL(location.href);
        // let profile = url.searchParams.get("profile");
        
        const profileData = await getProfile();
        console.log(profileData);

        if (profileData) {
            const container = document.querySelector("#profile");
            const profileInfo = profileContent(profileData);
            container.innerHTML = "";
            console.log(profileInfo);
            container.append(profileInfo);
        } else {
            console.log("Profile is not found.")
        }
    } catch (error) {
        console.error("Failed to load profile:", error)
    }
}
  