// import { postCard } from "./index.mjs";
// import { getProfile } from "../api/profile/get.mjs";
// import { load } from "../storage/index.mjs";
// import { API_SOCIAL_URL } from "../api/constants.mjs";
// import { authFetch } from "../api/authFetch.mjs";
// import { getPosts } from "../api/posts/get.mjs";

// //const profileData = JSON.parse(localStorage.getItem("profile"));

// const action = "/posts?author=";

// export async function getLocalstoragePosts() {
//     try {
//         const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
//         return storedPosts;
//     } catch (error) {
//         console.error("Failed to fetch posts from localstorage:", error);
//         return [];
//     }
// }

// //RENDER MY PROFILE-POSTS
// export async function renderProfilePosts(profile) {
//     try{
//         const profileData = await getProfile();
//         const profileName = profileData.name;
//         console.log(profileData, profileName)

//        // const response = await getPosts();
//         const allPosts = getLocalstoragePosts();
//         console.log(posts);
        
//         const postByProfile = allPosts.filter((post) => post.author.name === profileName);
//         console.log(postByProfile)
//         const container = document.querySelector("#profilePosts");
//         container.innerHTML = "";

//         postByProfile.forEach(postData => {

//     const postElement = postCard(postData);
//     parent.appendChild(postElement);
//     });


//      //   renderPostList(posts, container);


//         // posts.forEach(postData => {
//         //     const postCardElement = postCard(postData);
//         //     container.appendChild(postCardElement)

//         //  });


//         // const response = await postActions.getPosts();
//         // const allPosts = await response.json();
//         // const container = document.querySelector("#profilePosts");

//         // console.log(response.status, getPosts, allPosts)
//         // if (allPosts) {
//         //     //renderPostList(postByProfile, container);
//         //     console.log(postByProfile)
//         // } else {
//         //     console.log("Profile name not found")
//         // }

//         // console.log(profileName)



//     } catch (error) {
//         console.error("Failed to fetch posts", error)
//     }
// }

// // export function renderPostListByProfile(postDataList, container) {
// //     container.append(...postDataList.map(postData));
// // };

//         // postsByProfile.forEach(post => {
//         //     const postElement = document.createElement("div");
//         //     postElement.classList.add("post");
//         //     const postContent = document.createElement("p");
//         //     postContent.textContent = "post.content";

//         // console.log(postElement, postContent, postsData)

//         //     postElement.appendChild(postContent);
//         // });
    

// // export function renderPostByProfileList(postDataList, parent) {
// //     postDataList.forEach(postData => {

// //     const postElement = postCard(postData);
// //     parent.appendChild(postElement);
// //     });

// // }

// // export function renderPostByProfileList(postDataList, parent) {
// //     parent.append(...postDataList.map(postCard));
// // };

