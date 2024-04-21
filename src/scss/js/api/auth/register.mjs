import { API_AUTH, API_REGISTER, API_URL } from "../constants.mjs";

const method = "post";
const action = "/auth/register";

/**
 * Make a JSdoc
 */


export async function registerUser(profile){
    const registerUrl = API_URL + action;
    const body = JSON.stringify(profile);

    console.log(registerUrl);

    const response = await fetch(registerUrl, {
        headers: {
            "Content-Type": "application/json",
        },
        method,
        body,
    });
    const result = await response.json();
    console.log(result);
}
