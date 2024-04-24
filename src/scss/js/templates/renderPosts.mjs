import { postCard } from "./post.mjs";


// Render all posts
export function renderPostList(postDataList, parent) {
    parent.append(...postDataList.map(postCard))
};



// import * as postActions from "./api/posts/index.mjs";

// // Render all post / list
// export function renderPostList(postDataList, parent) {
//     parent.append(...postDataList.map(postCard))
// };

// async function testTemplate() {
//   const postss = await postActions.getPosts();
//   const post = postss[45]; 
//   const container = document.querySelector("#post");
//   postCard(post, container);
// }

// testTemplate()

// // export async function renderAllPosts() {
// //     const posts = await postActions.getPosts();
// //     const container = document.querySelector("#post");
// //     container.innerHTML = "";
// //     posts.forEach(postData => {
// //         const postElement = postCard(postData);
// //         container.appendChild(postElement);
        
// //         return posts;
// //     });
// // }
// // renderAllPosts()

// console.log("yeey")