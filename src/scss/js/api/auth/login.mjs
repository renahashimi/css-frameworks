import { API_AUTH, API_LOGIN, API_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";

const method = "post";
const action = "/auth/login";

/**
 * Make a JSdoc
 */


export async function loginUser(profile){
    const loginUrl = API_URL + action;
    const body = JSON.stringify(profile);

    console.log(loginUrl);

    const response = await fetch(loginUrl, {
        headers: {
            "Content-Type": "application/json",
        },
        method,
        body,
    });

    const { accessToken, ...user } = await response.json();
    
    storage.save("token", accessToken);
    storage.save("profile", user);

    alert("You are logged in")
    window.location.href = "/";

}