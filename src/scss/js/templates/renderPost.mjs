import { postCard } from "./post.mjs";

// Render a post
export function renderPostCard(postData, parent) {
  parent.append(postCard(postData))
}









// import * as postActions from "./api/posts/index.mjs";

// export async function renderSinglePosts(id) {
//     const post = await postActions.getPost(id);
//     const container = document.querySelector("#post");
//     container.innerHTML = "";
//     const postElement = postCard(post);
//     container.appendChild(postElement);

//     return post;
//   }