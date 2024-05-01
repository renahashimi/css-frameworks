import { getProfile } from "../api/profile/get.mjs";
import { profileContent } from "./profileTemplate.mjs";


export async function renderProfile(profileData) {
    try {
        const url = new URL(location.href);
        let name = url.searchParams.get("name");
        
        const profileData = await getProfile();
        console.log(profileData);

        if (profileData) {
            const container = document.querySelector("#profile");
            const profileInfo = profileContent(profileData, container);
            container.append(profileInfo);
        } else {
            console.log("This profile is not found:", name)
        }
    } catch (error) {
        console.error("Failed to load profile:", error)
    }
}
  