import { API_SOCIAL_URL, API_AUTH, API_REGISTER } from "../constants.mjs";

const method = "post";
const action = "/auth/register";

/**
 * Make a JSdoc
 */

export async function registerUser(profile){
    const registerUrl = `${API_SOCIAL_URL}${API_AUTH}${API_REGISTER}`;
    const body = JSON.stringify(profile);

    console.log(registerUrl);

    const response = await fetch(registerUrl, {
        headers: {
            "Content-Type": "application/json",
        },
        method,
        body
    });
    const result = await response.json();
}
