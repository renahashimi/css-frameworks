import { API_URL } from "../constants.mjs"
import { authFetch } from "../authFetch.mjs";

const method = "put";
const action = "/profile";

export async function updateProfile(profileData) {
    if (!profileData.name) {
        throw new Error("Requires a name");
    } 
    const updateProfileUrl = `${API_URL}${action}/${profileData.name}`;
    //console.log(updatePostUrl)
    const response = await authFetch(updateProfileUrl, {
        method,
        body: JSON.stringify(profileData),  
    });
    return await response.json();
}  
