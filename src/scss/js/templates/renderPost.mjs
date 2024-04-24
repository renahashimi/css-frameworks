import { postCard } from "./post.mjs";
import * as postActions from "./api/posts/index.mjs";


// Render a post
function renderPostCard(postData, parent) {
    parent.append(postCard(postData))
}

export async function renderSinglePosts() {
    const post = await postActions.getPosts();
    const container = document.querySelector("#post");
    container.innerHTML = "";
    const postElement = postCard(post);
    container.appendChild(postElement);

    return post;
  }