import { load } from "../storage/index.mjs";

export function headers() {
    const token = load("token");
    //console.log(token);
    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    };
}

export async function authFetch(url, options = {}) {
    return fetch(url, {
        ...options,
        headers: headers()
    });
}

// export function headers() {
//     const token = load("token");
//     const headersObj = {"Content-Type": "application/json",};

//     if (token) {
//         headersObj.Authorization =`Bearer ${token}`;
//     };

//     //console.log(token);
//     return headersObj;     
// }

// export async function authFetch(url, options = {}) {
//     return fetch(url,{
//         ...options,
//         headers: headers()
//     });
// }