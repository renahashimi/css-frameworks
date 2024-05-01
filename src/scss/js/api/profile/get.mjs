import { load } from "../../storage/index.mjs";
import { authFetch } from "../authFetch.mjs";
import { API_URL } from "../constants.mjs";

// const method = "get";
const action = "/profiles"

export async function getProfiles() {
    const getProfilesUrl = `${API_URL}${action}`;
    const response = await authFetch(getProfilesUrl);
    return await response.json();
}

export async function getProfile(name = load("profile").name) {
    if (!name) {
        throw new Error("Requires a name");
    } 
    const getProfileUrl = `${API_URL}${action}/${name}`;
    const response = await authFetch(getProfileUrl);
    return await response.json(); 
}
